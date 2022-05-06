const SUCCESS = "\x1b[32mSUCCESS\x1b[0m";
const FAIL = "\x1b[31mFAIL\x1b[0m";
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
const mt_message = async (msg,func) => {
    x=await func();
    console.log(`${msg}`);
    await console.log("    ↳"+(x)); return x;
};
const mt_testsuite = async(msgs, funcs) => {
    var errorParts = "";
    for(var i=0; i<funcs.length; i++) {
        var x=await mt_message(msgs[i], funcs[i]);
        if(x.includes(FAIL)) {
            errorParts += msgs[i]+"\n";
        }
    }
    if(errorParts != "") {
        errorParts = "\x1b[41m\x1b[33mFAILS DETECTED!:\x1b[0m Errors in: \n"+errorParts;
        console.log(errorParts);
        return FAIL;
    }
    return SUCCESS;
}
