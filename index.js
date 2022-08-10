// code your solution here

function saturdayFun(activity ="roller-skate"){
return `This Saturday, I want to ${activity}!`
}
saturdayFun()
saturdayFun("bathe my dog")

const mondayWork = function (activity ="go to the office") {
return `This Monday, I will ${activity}.`
}
mondayWork()
mondayWork("work from home")

const wrapAdjective = function (symbols = "*"){
    return function (adj = "a hard worker"){
        return `You are ${symbols}${adj}${symbols}!`
    }
}

wrapAdjective()
wrapAdjective("||")("a dedicated programmer")