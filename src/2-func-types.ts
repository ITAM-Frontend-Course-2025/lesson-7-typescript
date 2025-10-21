// -------------------------- 1 пункт --------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

type Callback = () => void

const ab: Callback = () => {console.log("12312")}

// Условие------------------------------------------------------
// 1. Типизируй аргументы фильтрации базара
//
// 2. Типизируй возвращаемое значение функции
// -------------------------------------------------------------
type FilterChecker = (arg1: string) => boolean 

function filterBazar(bazar: string[], filterCondition: (arg1: string) => boolean): string[] {
    return bazar.filter((value) => filterCondition(value))
}

const checker: FilterChecker = (name) => {
    if (name === "bazar") {
        return true
    }
    
    return false
}

filterBazar(["bazar", "bazar", "ne bazar"], checker)

// -------------------------- 2 пункт --------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

// type Object1 = {
//     name?: string
// }

// Условие------------------------------------------------------
// 1. Создай тип функции колбека
//
// 2. Подключи этот тип к кастомной реализации forEach
// -------------------------------------------------------------

type CallbackType = (value: number, index?: number, array?: number[]) => void

function customForEach(arr: number[], callback: CallbackType) {
    arr.forEach(callback)
}
