// 5. A teacher wants to create a rubric for grading students based on a score from 0 to 11.
//A student passes if they have a score greater than or equal to 5. Export a function that returns "Pass" or "Fail".

export function rubricPassFail(score) {
    if (score >= 5){
        console.log("Pass");
    }else {
        console.log("Fail");
    }
}

rubricPassFail(5);