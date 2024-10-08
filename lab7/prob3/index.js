(async () => {
    const promise = fetch("https://dummyjson.com/recipes");
    promise.then((response) => response.json())
        .then(data => {
            const recipes = data["recipes"];
            return recipes.map((recipe) => recipe["name"]);
        })
        .then(console.log)
        .catch(console.error);
})()