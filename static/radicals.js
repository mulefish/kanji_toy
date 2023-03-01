// KEY:
// k = kanji
// m = meaning 
// j = japanese reading 
// p = position 
// p:NILL = none
// p:LEFT
// p:TOP
// P:RIGHT
// P:BOTTOM
const NILL='NILL'
const LEFT="LEFT"
const TOP ="TOP"
const RIGHT="RIGHT"
const BOTTOM="BOTTOM"

const radicals = [
    {
        k:	"⺃",
        m: "the second",
        j: "おつ",
        p: NILL   
    }, 
    {
        k:"⺅",
        m:"person",
        j:"にんべん",
        p:LEFT,
    }, 
    {
        k:"⺇",
        m:"wind",
        j:"かぜかんむり",
        p:TOP,
 
    }, 
    
    {
        k:"⺉",
        m:"knife, sword",
        j:"りっとう",
        p:RIGHT,
    }, 
    {
        k:"⺌",
        m:"small",
        j:"しょうかんむり",
        p:TOP,
 
    }, 
    
    {
        k:"⺍",
        m:"Katakana Tsu",
        j:"つ",
        p:TOP,
 
    }, 
    
    {
        k:"⺐",
        m:"lame leg",
        j:"だいのまげあし",
        p:RIGHT,
 
    }, 
    
    {
        k:"⺓",
        m:"young slight",
        j:"いとがしら",
        p:NILL,
 
    }, 
    
    {
        k:"⺔",
        m:"pig's head",
        j:"けいがしら",
        p:NILL,
 
    }, 
    
    {
        k:"⺕",
        m:"pig’s head",
        j:"けいがしら",
        p:NILL,
 
    }, 
    
    {
        k:"⺖",
        m:"heart, mind, spirit",
        j:"りっしんべん",
        p:LEFT,
 
    }, 
    
    {
        k:"⺗",
        m:"heart, mind, spirit",
        j:"したごころ",
        p:BOTTOM,
 
    }, 
    
    {
        k:"⺘",
        m:"hand",
        j:"てへん",
        p:LEFT,
 
    }, 
    {k:"⺙",m:"activity, to strike, hit",j:"ぼくづくり",p:RIGHT    }, 
    {k:"⺛",m:"not",j:"むにょう",p:NILL    }, 
    {k:"⺝",m:"moon, month, period",j:"つきへん",p:LEFT    }, 
    {k:"⺡",m:"water",j:"さんずい",p:LEFT    }, 
    {k:"⺣",m:"fire",j:"れっか",p:BOTTOM    }, 
    {k:"⺤",m:"claw, nail",j:"つめかんむり",p:TOP    }, 
    {k:"",m:"",j:"",p:    }, 
    
    



]

try {
    if (require.main === module) {

        // self-test 
        let isOk = true 


        radicals.forEach((obj, i)=> { 
            if( obj.k.length > 0  ) {
                console.log( obj['k'] )

                if (obj.k.length < 1 || obj.m.length < 1 || obj.j.length < 1 || obj.p.length < 1 ) {
                    isOk = false                     
                }
            }
        })

        const verdict = isOk === true ? "PASS" : "FAIL"
        console.log("SHAPE IS: " + verdict)

    }
} catch (browser_go_boom ) {
    console.log(browser_go_boom)
}
