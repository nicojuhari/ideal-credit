import axios from 'axios'
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    let apiURL = config.icm_api_url
    
    console.log(apiURL + '/cerere_online?secret_key=' + config.secret_key, 'server/api')
    try {
        if(apiURL && body) {
            let response = await axios.post(apiURL + '/cerere_online?secret_key=' + config.secret_key, body)

            console.log(response.data)
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