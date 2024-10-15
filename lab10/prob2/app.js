import express from "express";

const app = express();

const numbersValidator = (req, res, next) => {
    const a = res.locals.a;
    const b = res.locals.b;
    if (a === null || b === null) {
        next(new Error("Missing parameters"));
    }
    if (isNaN(a) || isNaN(b)) {
        next(new Error("Parameters are not numbers"));
    } else {
        next();
    }
}

const divisionByZeroValidator = (req, res, next) => {
    const b = res.locals.b;
    if (b === 0) {
        next(new Error("Can not divide by 0"));
    } else {
        next();
    }
}



// Prepare parameters for GET requests includes parameters
app.get("/:operation/:a/:b", (req, res, next) => {
    res.locals.a = parseInt(req.params.a);
    res.locals.b = parseInt(req.params.b);
    next();
})

app.get("/:operation", (req, res, next) => {
    res.locals.a = parseInt(req.query.a);
    res.locals.b = parseInt(req.query.b);
    next();
})

app.post("/:operation/:a/:b", (req, res, next) => {
    res.locals.a = parseInt(req.params.a);
    res.locals.b = parseInt(req.params.b);
    next();
})

app.post("/:operation",
    (req, res, next) => {
        if (Object.keys(req.query).length === 0) {
            next()
        }
        res.locals.a = parseInt(req.query.a);
        res.locals.b = parseInt(req.query.b);
        next('route');
    },
    express.urlencoded({extended: true}),
    express.json(),
    (req, res, next) => {
        res.locals.a = parseInt(req.body.a);
        res.locals.b = parseInt(req.body.b);
        console.log(res.locals)
        next();
    }
)


app.use("/addition", numbersValidator, (req, res, next) => {
    res.status(200).json({
        "message": res.locals.a + res.locals.b
    })
})

app.use("/subtraction", numbersValidator, (req, res, next) => {
    res.status(200).json({
        "message": res.locals.a - res.locals.b
    })
})

app.use("/multiplication", numbersValidator, (req, res, next) => {
    res.status(200).json({
        "message": res.locals.a * res.locals.b
    })
})

app.use("/division", numbersValidator, divisionByZeroValidator, (req, res, next) => {
    res.status(200).json({
        "message": res.locals.a / res.locals.b
    })
})

app.use("/modulus", numbersValidator, divisionByZeroValidator, (req, res, next) => {
    res.status(200).json({
        "message": res.locals.a % res.locals.b
    })
})

// Not found handler
app.use((req, res, next) => {
    res.status(404).send("URL not found");
})

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(400).json({
        error: err.message
    });
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})