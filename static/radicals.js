// KEY:
// k = kanji
// m = meaning 
// j = japanese reading 
// p = position 
const NILL = "NILL"
const LEFT = "LEFT"
const TOP = "TOP"
const RIGHT = "RIGHT"
const BOTTOM = "BOTTOM"
const LEFT_BOTTOM = "LEFT_BOTTOM"
const LEFT_TOP_RIGHT = "LEFT_TOP_RIGHT"
const TOP_RIGHT = "TOP_RIGHT"
const LEFT_TOP_BOTTOM = "LEFT_TOP_BOTTOM"
const LEFT_TOP="LEFT_TOP"

const radicals = [
    { k: '⺃', m: 'the second', j: 'おつ', p: 'NILL' },
    { k: '⺅', m: 'person', j: 'にんべん', p: 'LEFT' },
    { k: '⺇', m: 'wind', j: 'かぜかんむり', p: 'TOP' },
    { k: '⺉', m: 'knife, sword', j: 'りっとう', p: 'RIGHT' },
    { k: '⺌', m: 'small', j: 'しょうかんむり', p: 'TOP' },
    { k: '⺍', m: 'Katakana Tsu', j: 'つ', p: 'TOP' },
    { k: '⺐', m: 'lame leg', j: 'だいのまげあし', p: 'RIGHT' },
    { k: '⺓', m: 'young slight', j: 'いとがしら', p: 'NILL' },
    { k: '⺔', m: "pig's head", j: 'けいがしら', p: 'NILL' },
    { k: '⺕', m: 'pig’s head', j: 'けいがしら', p: 'NILL' },
    { k: '⺖', m: 'heart, mind, spirit', j: 'りっしんべん', p: 'LEFT' },
    { k: '⺗', m: 'heart, mind, spirit', j: 'したごころ', p: 'BOTTOM' },
    { k: '⺘', m: 'hand', j: 'てへん', p: 'LEFT' },
    { k: '⺙', m: 'activity, to strike, hit', j: 'ぼくづくり', p: 'RIGHT' },
    { k: '⺛', m: 'not', j: 'むにょう', p: 'NILL' },
    { k: '⺝', m: 'moon, month, period', j: 'つきへん', p: 'LEFT' },
    { k: '⺡', m: 'water', j: 'さんずい', p: 'LEFT' },
    { k: '⺣', m: 'fire', j: 'れっか', p: 'BOTTOM' },
    { k: '⺤', m: 'claw, nail', j: 'つめかんむり', p: 'TOP' },
    { k: '⺨', m: 'beast', j: 'けものへん', p: 'LEFT' },
    { k: '⺪', m: 'bolt of cloth', j: 'ひきへん', p: 'LEFT' },
    { k: '⺫', m: 'net', j: '\tあみがしら', p: 'TOP' },
    { k: "⺭", m: "altar, festival, religious service", j: "しめすへん", p:LEFT    },
    { k: "⺮", m: "bamboo", j: "たけかんむり", p:TOP    },
    { k: "⺷", m: "sheep", j: "ひつじ", p:NILL    },
    { k: "⺹", m: "old, old-age", j: "おいかんむり", p: TOP   },
    { k: "⺾", m: "grass", j: "くさかんむり", p:TOP    },
    { k: "⻂", m: "clothing", j: "ころもへん", p:LEFT    },
    { k: "⻃", m: "cover, west", j: "にし", p: NILL   },
    { k: "⻊", m: "foot, leg", j: "あしへん", p:LEFT    },
    { k: "⻌", m: "road, walk, to advance", j: "しんにょう", p:LEFT_BOTTOM    },
    { k: "⻏", m: "village, country, city", j: "おおざと", p:RIGHT    },
    { k: "⻑", m: "long", j: "ながい", p:NILL    },
    { k: "⻖", m: "hill, mound", j: "こざとへん", p:LEFT    },
    { k: "⻗", m: "rain", j: "あめかんむり", p:TOP    },
    { k: "⻘", m: "blue, green", j: "あお", p:TOP    },
    { k: "⻟", m: "food, to eat", j: "しょくへん", p:LEFT    },
    { k: "⻨", m: "wheat", j: "むぎ", p:NILL    },
    { k: "⻩", m: "yellow", j: "き", p:NILL    },
    { k: "⻫", m: "alike", j: "せい", p:NILL    },
    { k: "⻭", m: "tooth", j: "	は", p:NILL    },
    { k: "⻲", m: "turtle", j: "かめ", p:NILL    },
    { k: "⼀", m: "one, horizontal stroke", j: "いち", p: NILL   },
    { k: "⼁", m: "vertical stroke", j: "たてぼう", p:NILL    },
    { k: "⼂", m: "dot", j: "てん", p:NILL    },
    { k: "⼃", m: "diagonal sweeping stroke", j: "の", p:NILL   },
    { k: "⼄", m: "the second", j: "おつ", p:NILL    },
    { k: "⼅", m: "vertical stroke with a hook", j: "はねぼう", p:NILL    },
    { k: "⼆", m: "two", j: "に", p:NILL    },
    { k: "⼇", m: "lid, top", j: "	なべぶた", p:TOP   },
    { k: "⼈", m: "person", j: "ひと", p: NILL   },
    { k: "⼉", m: "human legs", j: "ひとあし", p:NILL    },
    { k: "⼊", m: "to enter", j: "いる", p:NILL    },
    { k: "⼋", m: "eight", j: "	はち", p: NILL   },
    { k: "⼌", m: "to enclose", j: "けいがまえ", p:LEFT_TOP_RIGHT    },
    { k: "⼍", m: "cover, crown", j: "わかんむり", p:TOP    },
    { k: "⼎", m: "ice", j: "にすい", p:LEFT    },
    { k: "⼏", m: "table", j: "きにょう", p:RIGHT    },
    { k: "⼐", m: "container, open box", j: "かんにょう", p:LEFT_BOTTOM    },
    { k: "⼑", m: "knife, sword", j: "かたな", p:NILL    },
    { k: "⼒", m: "power", j: "ちから", p:NILL    },
    { k: "⼓", m: "to wrap", j: "つつみがまえ", p:TOP_RIGHT    },
    { k: "⼔", m: "spoon", j: "さじ", p:RIGHT    },
    { k: "⼕", m: "box", j: "はこがまえ", p:LEFT_TOP_BOTTOM    },
    { k: "⼖", m: "to conceal, hide", j: "かくしがまえ", p: LEFT_TOP_BOTTOM   },
    { k: "⼗", m: "ten", j: "じゅう", p:NILL    },
    { k: "⼘", m: "oracle", j: "ぼく", p:NILL    },
    { k: "⼙", m: "stamp, seal", j: "ふしづくり", p:RIGHT    },
    { k: "⼚", m: "cliff", j: "がんだれ", p:LEFT_TOP    },
     { k: "⼛", m: "private, Katakana Mu", j: "む", p:    },
     { k: "", m: "", j: "", p:    },
     { k: "", m: "", j: "", p:    },
     { k: "", m: "", j: "", p:    },
     { k: "", m: "", j: "", p:    },
    { k: "", m: "", j: "", p:    },
    { k: "", m: "", j: "", p:    },
    { k: "", m: "", j: "", p:    },









]

try {
    if (require.main === module) {

        // self-test 
        let isOk = true

        radicals.forEach((obj, i) => {
            if (obj.k.length > 0) {
                //console.log(obj.k, obj.p)
                try {
                    if (obj.k.length < 1 || obj.m.length < 1 || obj.j.length < 1 || obj.p.length < 1) {
                        isOk = false
                        console.log(obj)
                    } 
                } catch (boom) {
                    console.log("boom " + obj)
                }
            }
        })
        const verdict = isOk === true ? "PASS" : "FAIL"
        console.log("SHAPE IS: " + verdict)
    }
} catch (browser_go_boom) {
    console.log(browser_go_boom)
}
