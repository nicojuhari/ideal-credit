export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    let apiURL = config.icm_api_url
    if(apiURL && body && config.secret_key) {
        try {
            await $fetch( apiURL + '/cerere_online', {   
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-secret-key" : config.secret_key,
                        "User-Agent": "IdealCredit-Website/1.0",
                        "Accept": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    body,
                })
            return { success: true }
        } catch (err: any) {
            console.error('API Request Failed:', {
                url: apiURL + '/cerere_online',
                status: err.response?.status,
                statusText: err.response?.statusText,
                headers: err.response?.headers,
                body: err.response?._data,
                cfRay: err.response?.headers?.['cf-ray'], // Cloudflare trace ID
                message: err.message
            })
            return { 
                success: false, 
                error: err.message || 'API request failed',
                status: err.response?.status,
                cfRay: err.response?.headers?.['cf-ray']
            }
        }
    }

    return { success: false, error: 'Invalid API URL or request body' }
   
})