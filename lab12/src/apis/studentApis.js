
const host = "http://localhost:3000/api/v1"

export const apis = {
    getAllStudents: async () => {
        try {
            const response = await fetch(host + "/students");
            const data = await response.json();
            if (response.status === 200) {
                return data;
            }
            throw new Error(data.message);
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    addStudent: async ({id, name, program}) => {
        try {
            const response = await fetch(host + "/students", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    name: name,
                    program: program
                })
            });
            const data = await response.json();
            if (response.status !== 201) {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    deleteStudent: async (id) => {
        try {
            const response = await fetch(host + "/students/" + id, {
                method: "DELETE"
            });
            const data = await response.json();
            if (response.status !== 200) {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}; 