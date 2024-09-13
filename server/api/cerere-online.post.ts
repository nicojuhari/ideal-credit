export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    let apiURL = config.icm_api_url
    if(apiURL && body && config.secret_key) {
        try {
            await $fetch( apiURL + '/cerere_online', {   
                    method: 'POST',
                    headers: {
                        "x-api-secret-key" : config.secret_key
                    },
                    body,
                })
            return { success: true }
        } catch (err) {
            console.log(err)
            return { 
                success: false, 
                error: err instanceof Error ? err.message : 'An unknown error occurred'
            }
        }
    }

    return { success: false, error: 'Invalid API URL or request body' }
   
})