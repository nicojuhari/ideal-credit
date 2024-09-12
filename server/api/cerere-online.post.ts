import axios from 'axios'
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    let apiURL = config.icm_api_url
    
    console.log(apiURL + '/cerere_online?secret_key=' + config.secret_key, 'server/api')
    try {
        if(apiURL && body) {

            // const headers = {
            //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            //     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            //     'Accept-Language': 'en-US,en;q=0.5',
            //     'Referer': apiURL,
            //     'DNT': '1',
            //     'Connection': 'keep-alive',
            //     'Upgrade-Insecure-Requests': '1',
            //     'Content-Type': 'application/json',
            // }
            // 
            let response = await $fetch( apiURL + '/cerere_online?secret_key=' + config.secret_key, {   
                    method: 'POST',
                    body,
                })

            console.log(response)
            return { success: 'Cererea a fost transmisă cu success!'}
        }
        console.log(body)
        return { success: 'Cererea a fost transmisă cu success!'}
        // return false
    } catch (err) {
        console.log(err)
        return false;
    }
   
})