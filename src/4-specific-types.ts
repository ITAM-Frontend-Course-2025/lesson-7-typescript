// -------------------------- 1 пункт --------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

// Условие------------------------------------------------------
// 1. исправить ошибку так, чтобы у ivan был тип не never
//
// 2. ПОДСКАЗКА. Ivan должен стать либо супер-админом, либо простым админом
// -------------------------------------------------------------

type User = {
    id: number
    username: string
}

// Типы возможных админов
type BasicAdmin = User & {
    role: "basic-admin"
}
type SuperAdmin = User & {
    role: "super-admin"
}

let ivan: BasicAdmin | SuperAdmin = {
    id: 1,
    role: "super-admin",
    username: "ivan"
}
console.log(ivan)
// -------------------------- 2 пункт --------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

// Условие------------------------------------------------------
// Сделать тип для ответа сервера (то в каком виде нам пришли бы данные от него)
// 1. Создайте тип RequestPayload
//
// 2. О типе Promise вы узнаете совсем скоро, 
// но на данном этапе просто тип для промиса
//
// 3. !ОБЯЗАТЕЛЬНО! использование типа unknown
//
// 4. В типе запроса должны быть (data, errors, statusCode (100 - 499), requestUrl)
// -------------------------------------------------------------

type RequestPayload = {
    statusCode: number
    requestUrl: string
    header: object
    cookies: object
    data: unknown
}

async function customFetch(): Promise<RequestPayload> {
    const payload: Promise<RequestPayload> = new Promise((res) => {
        res({
            cookies: {},
            data: {},
            header: {},
            statusCode: 200,
            requestUrl: "https://google.com/api/users"
        } satisfies RequestPayload)
    })

    return payload
}

customFetch().then((data) => {
    data.
})