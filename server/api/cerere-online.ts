
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    let apiURL = config.icm_api_url
    
    try {
        if(apiURL && body) {
            let response = await fetch(apiURL + '/cerere_online', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(body)
                })
            let data = await response.json()
            return { success: 'Cererea a fost transmisă cu success!'}
        }
        return false
    } catch (err) {
        console.log(err)
        return false;
    }
   
})