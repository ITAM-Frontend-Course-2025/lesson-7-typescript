// -------------------------- 1 пункт --------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

// Условие------------------------------------------------------
// 1. Создать цепочку наследования Human -> Worker -> Programmer
//
// 2. Каждый тип должен РАСШИРЯТЬ родительский тип 1-2 полями
// -------------------------------------------------------------

// const variable = 
type Human = {
    name: string
    age: number
}

type EcoActivist = Human & {
    countryToDefend: string
}

type Degree = "высшее" | "среднее" | "среднее-общее" | "средне-специально"

type Worker = Human & {
    degree: Degree
    salary: number
    jobName: string
}

type Programmer = Worker & {
    language: "js" | "ts" | "rust" | "c++"
}

const vasya: Programmer = {
    name: "vaasya",
    age: 10,
    degree: "высшее",
    jobName: "Misis",
    language: "ts",
    salary: 100_000_000
}

// -------------------------- 2 пункт --------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

// Условие------------------------------------------------------
// У вас есть завод, который работает в зависимости от того какое действие в него передали
// Например - create-steel / repair-building / create-cars / repair-cars и тд ....
//
// 1. Создать 5 типов различных действий (они должны обязательно иметь поле-литерал type: "<название действия>")
//
// 2. Сделать так, чтобы action мог принять любое из 5 значений созданных экшенов
// -------------------------------------------------------------

type CreateSteelAction = {
    type: "create-steel"
}

type RepairBuildingAction = {
    type: "repair-building"
}

type RepairCarsAction = {
    type: "repair-cars"
}



// и тд.....

type ActionModel = CreateSteelAction | RepairBuildingAction | RepairCarsAction

function fabric(action: ActionModel): void {
    switch (action.type) {
        case "create-steel": 
            console.log()
            // Some logic for specific action ...
        // И тд для каждого экшена
            break
        case "repair-building": {
            console.log("REpairing building....")
            break
        }
        case "repair-cars": {
            console.log("Repairing cars....")
            break
        }
    }
}





