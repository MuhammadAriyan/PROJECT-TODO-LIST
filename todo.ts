#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgMagenta(' TO-DO LIST '))
let user :{userName : string} = await inquirer.prompt(
    {
    type:"input",
    name:"userName",
    message:"ENTER YOUR NAME TO CONTINUE ",
    validate(ans){
        if(ans){
            return true
        }
        return `enter the name`
    }
    }
)

console.log(chalk.blue(`hi ${user.userName}!!`.toUpperCase()))

let list:string[] = []

let a = await inquirer.prompt({
    type:"list",
    name:"cnfrm",
    message:"DO YOU WANT TO CONTINUE..",
    choices:[chalk.yellow("YES"),chalk.yellow("NO")]
})

while(a.cnfrm === chalk.yellow("YES")){
     let o = await inquirer.prompt({
        type:"list",
        name: "options",
        message:  chalk.greenBright("WHAT YOU WANNA DO ?"),
        choices: [chalk.magenta("ADD"),chalk.magenta("VIEW"),chalk.magenta("DELETE"),chalk.magenta("DELETE ALL")]
    })
    if(o.options === chalk.magenta("ADD")){
        let add = await inquirer.prompt ({
            type:"input",
            name:"added",
            message:chalk.green("ADD TASK "),
            validate(ans){
                if(ans){
                    return true
                }
                return chalk.red(`ENTER TASK`)
            }
        })
        list.push(add.added)
    }
    if(o.options===chalk.magenta("VIEW")){
        console.log(`YOUR LIST `,list)
    }
    if(o.options=== chalk.magenta("DELETE")){
        let dlt = await inquirer.prompt({
            type:"list",
            name:'deleted',
            message:chalk.green("TO DELETE"),
            choices:list
        })
        let d = list.indexOf(dlt.deleted)
        list.splice(d,1)
    }
    if(o.options ===chalk.magenta("DELETE ALL")){
        list = []
    }
    a = await inquirer.prompt({
        type:"list",
        name:"cnfrm",
        message:"DO YOU WANT TO CONTINUE..",
        choices:[chalk.yellow("YES"),("NO")]
    })
}


