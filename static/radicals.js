
const positions = {
    NILL: "NILL",
    LEFT: "LEFT",  // hen 
    TOP: "TOP", // kanmuri
    RIGHT: "RIGHT", // tsukuri
    BOTTOM: "BOTTOM", // ashi
    LEFT_BOTTOM: "LEFT_BOTTOM", // nyou
    LEFT_TOP_RIGHT: "LEFT_TOP_RIGHT", // kamae
    TOP_RIGHT: "TOP_RIGHT", // kamae
    LEFT_TOP_BOTTOM: "LEFT_TOP_BOTTOM", // kamae
    LEFT_TOP: "LEFT_TOP", // tare
    ALL: "ALL", // I suppose this would be kamae also?
    UPPERLEFT_CENTER_BOTTOMRIGHT: "UPPERLEFT_CENTER_BOTTOMRIGHT", // kamae
    LEFT_BOTTOM_RIGHT: "LEFT_BOTTOM_RIGHT", // kamae
    LEFT_RIGHT: "LEFT_RIGHT",
    TOP_LEFT: "TOP_LEFT",
}

// KEY:
// k = kanji
// e = english 
// j = japanese reading 
// p = position 

const radicals = [
    { k: '⼀', e: 'one, horizontal stroke', j: 'いち', p: positions.NILL },
    { k: '⼁', e: 'vertical stroke', j: 'たてぼう', p: positions.NILL },
    { k: '⼂', e: 'dot', j: 'てん', p: positions.NILL },
    { k: '⼃', e: 'diagonal sweeping stroke', j: 'の', p: positions.TOP },
    { k: '⼄', e: 'the second', j: 'おつ', p: positions.NILL },
    { k: '⺃', e: 'the second', j: 'おつ', p: positions.NILL },
    { k: '⼅', e: 'vertical stroke with a hook', j: 'はねぼう', p: positions.NILL },
    { k: '⼆', e: 'two', j: 'に', p: positions.NILL },
    { k: '⼇', e: 'lid, top', j: 'なべぶた', p: positions.TOP },
    { k: '⼈', e: 'person', j: 'ひと', p: positions.NILL },

    { k: '⺅', e: 'person', j: 'にんべん', p: positions.LEFT },
    { k: '𠆢', e: 'person', j: 'ひとやね', p: positions.TOP },
    { k: '⼉', e: 'human legs', j: 'ひとあし', p: positions.BOTTOM },
    { k: '⼊', e: 'to enter', j: 'いる', p: positions.NILL },
    { k: '⼋', e: 'eight', j: 'はち', p: positions.NILL },
    { k: '⼌', e: 'to enclose', j: 'けいがまえ', p: positions.LEFT_TOP_RIGHT },
    { k: '⼍', e: 'cover, crown', j: 'わかんむり', p: positions.TOP },
    { k: '⼎', e: 'ice', j: 'にすい', p: positions.LEFT },
    { k: '⼏', e: 'table', j: 'きにょう', p: positions.RIGHT },
    { k: '⺇', e: 'wind', j: 'かぜかんむり', p: positions.TOP },
    { k: '⼐', e: 'container, open box', j: 'かんにょう', p: positions.LEFT_BOTTOM_RIGHT },
    { k: '⼑', e: 'knife, sword', j: 'かたな', p: positions.NILL },
    { k: '⺉', e: 'knife, sword', j: 'りっとう', p: positions.RIGHT },
    { k: '⼒', e: 'power', j: 'ちから', p: positions.NILL },
    { k: '⼓', e: 'to wrap', j: 'つつみがまえ', p: positions.TOP_RIGHT },
    { k: '⼔', e: 'spoon', j: 'さじ', p: positions.RIGHT },
    { k: '⼕', e: 'box', j: 'はこがまえ', p: positions.LEFT_TOP_BOTTOM },
    { k: '⼖', e: 'to conceal, hide', j: 'かくしがまえ', p: positions.LEFT_TOP_BOTTOM },
    { k: '⼗', e: 'ten', j: 'じゅう', p: positions.NILL },
    { k: '⼘', e: 'oracle', j: 'ぼく', p: positions.NILL },
    { k: '⼙', e: 'stamp, seal', j: 'ふしづくり', p: positions.RIGHT },
    { k: '⼚', e: 'cliff', j: 'がんだれ', p: positions.LEFT_TOP },
    { k: '⼛', e: 'private, Katakana Mu', j: 'む', p: positions.NILL },
    { k: '⼜', e: 'again, right hand', j: 'また', p: positions.NILL },
    { k: '⼝', e: 'mouth', j: 'くち', p: positions.NILL },
    {
        k: '⼞',
        e: 'border, territorial boundaries',
        j: 'くにがまえ',
        p: positions.ALL
    },
    { k: '⼟', e: 'earth', j: 'つち', p: positions.NILL },
    { k: '⼠', e: 'man, scholar, samurai', j: 'さむらい', p: positions.NILL },
    { k: '⼡', e: 'to follow', j: 'のまた', p: positions.NILL },
    { k: '⼢', e: 'to go slowly', j: 'なつあし', p: positions.BOTTOM },
    { k: '⼣', e: 'evening', j: 'ゆうべ', p: positions.NILL },
    { k: '⼤', e: 'large, big', j: 'だい', p: positions.NILL },
    { k: '⼥', e: 'woman', j: 'おんな', p: positions.NILL },
    { k: '⼦', e: 'child, son', j: 'こ', p: positions.NILL },
    { k: '⼧', e: 'roof, house', j: 'うかんむり', p: positions.TOP },
    { k: '⼨', e: 'inch, (2.25 cm)', j: 'すん', p: positions.RIGHT },
    { k: '⼩', e: 'small', j: 'しょう', p: positions.NILL },
    { k: '⺌', e: 'small', j: 'しょうかんむり', p: positions.TOP },
    { k: '⺐', e: 'lame leg', j: 'だいのまげあし', p: positions.RIGHT },
    { k: '⼫', e: 'corpse, awning', j: 'しかばね', p: positions.LEFT_TOP },
    { k: '⼬', e: 'sprout', j: 'くさのめ', p: positions.NILL },
    { k: '⼭', e: 'mountain', j: 'やま', p: positions.TOP },
    { k: '⼮', e: 'winding river', j: 'まがりがわ', p: positions.NILL },
    { k: '川', e: 'river', j: 'さんぼんがわ', p: positions.NILL },
    { k: '⼯', e: 'work, carpenter, skill', j: 'たくみ', p: positions.LEFT },
    { k: '⼰', e: 'self', j: 'おのれ', p: positions.NILL },
    { k: '⼱', e: 'cloth', j: 'はば', p: positions.LEFT },
    { k: '⼲', e: 'to dry, shield', j: 'かん', p: positions.NILL },
    { k: '⺓', e: 'young, slight', j: 'いとがしら', p: positions.NILL },
    { k: '⼴', e: 'slanting roof', j: 'まだれ', p: positions.LEFT_TOP },
    { k: '⼵', e: 'to move, stretch', j: 'えんにょう', p: positions.LEFT_BOTTOM },
    { k: '⼶', e: 'folded hands', j: 'にじゅうあし', p: positions.BOTTOM },
    { k: '⼷', e: 'javelin', j: 'いぐるみ', p: positions.NILL },
    { k: '⼸', e: 'bow （in archery）', j: 'ゆみ', p: positions.LEFT },
    { k: '⼹', e: 'pig’s head', j: 'けいがしら', p: positions.NILL },
    { k: '⺕', e: 'pig’s head', j: 'けいがしら', p: positions.NILL },
    { k: '⺔', e: 'pig’s head', j: 'けいがしら', p: positions.NILL },
    { k: '⼺', e: 'hair-style, light rays', j: 'さんづくり', p: positions.RIGHT },
    {
        k: '⼻',
        e: 'step, stride, street, to go',
        j: 'ぎょうにんべん',
        p: positions.LEFT
    },

    { k: '⺾', e: 'grass', j: 'くさかんむり', p: positions.NILL },
    { k: '⻌', e: 'road, walk, to advance', j: 'しんにょう', p: positions.LEFT_BOTTOM },
    { k: '⻏', e: 'village, country, city', j: 'おおざと', p: positions.RIGHT },
    { k: '⻖', e: 'hill, mound', j: 'こざと', p: positions.LEFT },
    { k: '⺍', e: 'Katakana Tsu', j: 'つ', p: positions.NILL },
    { k: '⺖', e: 'heart, mind, spirit', j: 'りっしんべん', p: positions.LEFT },
    { k: '⺘', e: 'hand', j: 'て', p: positions.LEFT },
    { k: '⺡', e: 'water', j: 'さんずい', p: positions.LEFT },
    { k: '⺨', e: 'beast', j: 'けもの', p: positions.LEFT },
    { k: '⼼', e: 'heart, mind, spirit', j: 'こころ', p: positions.NILL },
    { k: '⺗', e: 'heart, mind, spirit', j: 'したごころ', p: positions.BOTTOM },
    { k: '⼽', e: 'spear, weapon', j: 'ほこ', p: positions.NILL },
    { k: '⼾', e: 'door', j: 'と', p: positions.TOP_LEFT },
    { k: '⼿', e: 'hand', j: 'て', p: positions.NILL },
    { k: '⽀', e: 'branch', j: 'しにょう', p: positions.NILL },
    { k: '⽁', e: 'activity, to strike, hit', j: 'ぼくづくり', p: positions.RIGHT },
    { k: '⺙', e: 'activity, to strike, hit', j: 'ぼくづくり', p: positions.RIGHT },
    { k: '⽂', e: 'literature, letters', j: 'ぶん', p: positions.NILL },
    { k: '⽃', e: 'big dipper, ladle, 18 liters', j: 'ますづくり', p: positions.RIGHT },
    { k: '⽄', e: 'axe', j: 'おのづくり', p: positions.RIGHT },
    { k: '⽅', e: 'direction, flag', j: 'ほう', p: positions.NILL },
    { k: '⽆', e: 'not', j: 'むにょう', p: positions.NILL },
    { k: '⽇', e: 'sun, day, time', j: 'ひ', p: positions.NILL },
    { k: '⽈', e: 'to say', j: 'ひらび', p: positions.NILL },
    { k: '⽉', e: 'moon, month, period', j: 'つき', p: positions.NILL },
    { k: '⺝', e: 'moon, month, period', j: 'つき', p: positions.LEFT },
    { k: '⽊', e: 'tree, wood', j: 'き', p: positions.LEFT },
    { k: '⽋', e: 'to lack, yawn', j: 'あくび', p: positions.NILL },
    { k: '⽌', e: 'to stop', j: 'とめる', p: positions.NILL },
    {
        k: '⽍',
        e: 'death &amp; dying, to decompose',
        j: 'がつ',
        p: positions.NILL
    },

    { k: '⽎', e: 'lance shaft, action', j: 'るまた', p: positions.RIGHT },
    { k: '⽏', e: 'not, mother', j: 'なかれ', p: positions.NILL },
    { k: '⽐', e: 'to compare', j: 'くらべる', p: positions.NILL },
    { k: '⽑', e: 'hair', j: 'け', p: positions.NILL },
    { k: '⽒', e: 'family, clan', j: 'うじ', p: positions.NILL },
    { k: '⽓', e: 'steam, air', j: 'きがまえ', p: positions.UPPERLEFT_CENTER_BOTTOMRIGHT },
    { k: '⽔', e: 'water', j: 'みず', p: positions.NILL },
    { k: '⽕', e: 'fire', j: 'ひ', p: positions.NILL },
    { k: '⺣', e: 'fire', j: 'れっか', p: positions.BOTTOM },
    { k: '⽖', e: 'claw, nail', j: 'つめ', p: positions.NILL },
    { k: '⺤', e: 'claw, nail', j: 'つめかんむり', p: positions.NILL },
    { k: '爫', e: 'claw, nail', j: 'つめかんむり', p: positions.NILL },
    { k: '⽗', e: 'father', j: 'ちち', p: positions.NILL },
    { k: '⽘', e: 'to mix', j: 'こう', p: positions.NILL },
    { k: '⽙', e: 'split wood', j: 'しょう', p: positions.LEFT },
    { k: '⽚', e: 'split wood', j: 'かた', p: positions.NILL },
    { k: '⽜', e: 'cow', j: 'うし', p: positions.NILL },
    { k: '⽝', e: 'dog', j: 'いぬ', p: positions.NILL },
    {
        k: '⺭',
        e: 'altar, festival, religious service',
        j: 'しめす',
        p: positions.LEFT
    },
    { k: '㓁', e: 'net', j: 'あみがしら', p: positions.NILL },
    { k: '⺹', e: 'old, old-age', j: 'おいかんむり', p: positions.NILL },
    { k: '⽞', e: 'darkness', j: 'げん', p: positions.NILL },
    { k: '⽟', e: 'jewelry', j: 'たま', p: positions.NILL },
    { k: '⽡', e: 'tile', j: 'かわら', p: positions.NILL },
    { k: '⽢', e: 'sweet', j: 'あまい', p: positions.NILL },
    { k: '⽣', e: 'birth, to be born, live', j: 'うまれる', p: positions.NILL },
    { k: '⽤', e: 'to use', j: 'もちいる', p: positions.NILL },
    { k: '⽥', e: 'rice paddy', j: 'た', p: positions.NILL },
    { k: '⽦', e: 'bolt of cloth', j: 'ひき', p: positions.NILL },
    { k: '⺪', e: 'bolt of cloth', j: 'ひき', p: positions.LEFT },
    { k: '⽧', e: 'sickness', j: 'やまいだれ', p: positions.LEFT_TOP },
    { k: '⽨', e: 'outspread legs, departure', j: 'はつがしら', p: positions.NILL },
    { k: '⽩', e: 'white', j: 'しろ', p: positions.NILL },
    { k: '⽪', e: 'skin, hide', j: 'けがわ', p: positions.NILL },
    { k: '⽫', e: 'plate, bowl', j: 'さら', p: positions.NILL },
    { k: '⽬', e: 'eye', j: 'め', p: positions.NILL },
    { k: '⽭', e: 'halberd', j: 'ほこ', p: positions.NILL },
    { k: '⽮', e: 'arrow', j: 'や', p: positions.NILL },
    { k: '⽯', e: 'stone', j: 'いし', p: positions.NILL },
    { k: '⽱', e: 'footprint', j: 'じゅうのあし', p: positions.NILL },
    { k: '⽲', e: 'grain', j: 'のぎ', p: positions.LEFT },
    { k: '⽳', e: 'hole, cave', j: 'あな', p: positions.NILL },
    { k: '⽴', e: 'to stand', j: 'たつ', p: positions.NILL },
    { k: '氺', e: 'water', j: 'したみず', p: positions.NILL },
    { k: '⺫', e: 'net', j: 'あみがしら', p: positions.NILL },
    { k: '𦉰', e: 'net', j: 'あみがしら', p: positions.NILL },
    { k: '⻂', e: 'clothing', j: 'ころも', p: positions.LEFT },
    { k: '⺛', e: 'not', j: 'むにょう', p: positions.NILL },
    { k: '⽵', e: 'bamboo', j: 'たけ', p: positions.NILL },
    { k: '⺮', e: 'bamboo', j: 'たけかんむり', p: positions.NILL },
    { k: '⽶', e: 'rice', j: 'こめ', p: positions.NILL },
    { k: '⽷', e: 'thread', j: 'いと', p: positions.NILL },
    { k: '⽸', e: 'earthen jar', j: 'みずがめ', p: positions.NILL },
    { k: '⽹', e: 'net', j: 'あみめ', p: positions.NILL },
    { k: '⽺', e: 'sheep', j: 'ひつじ', p: positions.NILL },
    { k: '⺷', e: 'sheep', j: 'ひつじ', p: positions.NILL },
    { k: '羽', e: 'feather, wing', j: 'はね', p: positions.NILL },
    { k: '⽻', e: 'feather, wing', j: 'はね', p: positions.NILL },
    { k: '⽼', e: 'old, old-age', j: 'おいかんむり', p: positions.NILL },
    { k: '⽽', e: 'and also', j: 'しこうして', p: positions.NILL },
    { k: '⽾', e: 'plow', j: 'らいすき', p: positions.LEFT },
    { k: '⽿', e: 'ear', j: 'みみ', p: positions.NILL },
    { k: '⾀', e: 'writing brush', j: 'ふでづくり', p: positions.NILL },
    { k: '⾁', e: 'flesh, meat', j: 'にく', p: positions.NILL },
    { k: '⾂', e: 'retainer, minister', j: 'しん', p: positions.NILL },
    { k: '⾃', e: 'self', j: 'みずから', p: positions.NILL },
    { k: '⾄', e: 'to arrive, reach', j: 'いたる', p: positions.NILL },
    { k: '⾅', e: 'mortar, quern', j: 'うす', p: positions.NILL },
    { k: '⾆', e: 'tongue', j: 'した', p: positions.NILL },
    { k: '⾇', e: 'contrary, to err', j: 'まいあし', p: positions.NILL },
    { k: '⾈', e: 'ship, boat', j: 'ふね', p: positions.NILL },
    { k: '⾉', e: 'boundary', j: 'こん', p: positions.NILL },
    { k: '⾊', e: 'color', j: 'いろ', p: positions.NILL },
    { k: '⾋', e: 'grass, plant', j: 'くさ', p: positions.NILL },
    { k: '⾌', e: 'tiger', j: 'とらがしら', p: positions.NILL },
    { k: '⾍', e: 'worm, insect, bug', j: 'むし', p: positions.NILL },
    { k: '⾎', e: 'blood', j: 'ち', p: positions.NILL },
    { k: '⾏', e: 'to go', j: 'ぎょうがまえ', p: positions.LEFT_RIGHT },
    { k: '⾐', e: 'clothing', j: 'ころも', p: positions.NILL },
    { k: '⾑', e: 'cover, west', j: 'にし', p: positions.NILL },
    { k: '⻃', e: 'cover, west', j: 'にし', p: positions.NILL },
    { k: '⽠', e: 'melon', j: 'うり', p: positions.NILL },
    { k: '⾒', e: 'to see', j: 'みる', p: positions.NILL },
    { k: '⾓', e: 'horn, corner', j: 'つの', p: positions.NILL },
    { k: '⾔', e: 'words, to speak, say', j: 'げん', p: positions.NILL },
    { k: '⾕', e: 'valley', j: 'たに', p: positions.NILL },
    { k: '⾖', e: 'bean', j: 'まめ', p: positions.NILL },
    { k: '⾗', e: 'pig', j: 'いのこ', p: positions.NILL },
    { k: '⾘', e: 'badger', j: 'むじな', p: positions.LEFT },
    { k: '⾙', e: 'shell, property, wealth', j: 'かい', p: positions.NILL },
    { k: '⾚', e: 'red', j: 'あか', p: positions.NILL },
    { k: '⾛', e: 'to run', j: 'はしる', p: positions.LEFT_BOTTOM },
    { k: '⾜', e: 'foot, leg', j: 'あし', p: positions.NILL },
    { k: '⻊', e: 'foot, leg', j: 'あし', p: positions.NILL },
    { k: '⾝', e: 'body', j: 'み', p: positions.NILL },
    { k: '⾞', e: 'vehicle, wheel, car', j: 'くるま', p: positions.NILL },
    { k: '⾟', e: 'bitter', j: 'からい', p: positions.NILL },
    { k: '⾠', e: 'Fifth zodiac sign, 7–9 A.M.', j: 'しんのたつ', p: positions.NILL },
    { k: '⾡', e: 'to advance, move ahead', j: 'しんにょう', p: positions.NILL },
    { k: '⾢', e: 'community', j: 'むら', p: positions.NILL },
    { k: '⾣', e: 'sake jar, bird', j: 'ひよみのとり', p: positions.NILL },
    { k: '⾤', e: 'to separate', j: 'のごめ', p: positions.NILL },
    { k: '', e: 'to separate', j: 'のごめ', p: positions.NILL },
    { k: '⾥', e: 'village, (3.93 km)', j: 'さと', p: positions.NILL },
    { k: '', e: 'village, (3.93 km)', j: 'さと', p: positions.LEFT },
    { k: '⾂', e: 'retainer, minister', j: 'しん', p: positions.NILL },
    { k: '', e: 'contrary, to err', j: 'まいあし', p: positions.NILL },
    { k: '⻨', e: 'wheat', j: 'むぎ', p: positions.NILL },
    { k: '⾦', e: 'metal, gold, mineral', j: 'かね', p: positions.NILL },
    { k: '⻑', e: 'long', j: 'ながい', p: positions.NILL },
    { k: '⾨', e: 'gate, door', j: 'もんがまえ', p: positions.LEFT_TOP_RIGHT },
    { k: '⾩', e: 'hill', j: 'こざと', p: positions.NILL },
    { k: '⾪', e: 'to capture', j: 'れいづくり', p: positions.RIGHT },
    { k: '⾫', e: 'small bird', j: 'ふるとり', p: positions.NILL },
    { k: '⾬', e: 'rain', j: 'あめ', p: positions.NILL },
    { k: '⻗', e: 'rain', j: 'あめかんむり', p: positions.NILL },
    { k: '⾭', e: 'blue, green', j: 'あお', p: positions.NILL },
    { k: '⻘', e: 'blue, green', j: 'あお', p: positions.NILL },
    { k: '⾮', e: 'wrong, non-', j: 'あらず', p: positions.NILL },
    { k: '⻟', e: 'food, to eat', j: 'しょく', p: positions.LEFT },
    { k: '⻫', e: 'alike', j: 'せい', p: positions.NILL },
    { k: '⾯', e: 'face, surface', j: 'めん', p: positions.NILL },
    { k: '⾰', e: 'leather', j: 'つくりがわ', p: positions.NILL },
    { k: '', e: 'leather', j: 'なめしがわ', p: positions.NILL },
    { k: '⾲', e: 'leek', j: 'にら', p: positions.NILL },
    { k: '⾳', e: 'sound, noise', j: 'おと', p: positions.NILL },
    { k: '⾴', e: 'head, page', j: 'おおがい', p: positions.RIGHT },
    { k: '⾵', e: 'wind', j: 'かぜ', p: positions.TOP },
    { k: '⾶', e: 'to fly', j: 'とぶ', p: positions.NILL },
    { k: '⾷', e: 'food, to eat', j: 'しょく', p: positions.NILL },
    { k: '⾸', e: 'head', j: 'くび', p: positions.NILL },
    { k: '⾹', e: 'scent', j: 'かおり', p: positions.NILL },
    { k: '⾺', e: 'horse', j: 'うま', p: positions.NILL },
    { k: '⾻', e: 'bone', j: 'ほね', p: positions.NILL },
    { k: '⾼', e: 'high', j: 'たかい', p: positions.NILL },
    { k: '⾽', e: 'long hair', j: 'かみかんむり', p: positions.NILL },
    { k: '⾾', e: 'fighting', j: 'たたかいがまえ', p: positions.LEFT_TOP_RIGHT },
    { k: '⾿', e: 'herbs', j: 'においざけ', p: positions.NILL },
    { k: '⿀', e: 'tripod', j: 'れき', p: positions.NILL },
    { k: '⿁', e: 'demon', j: 'おに', p: positions.NILL },
    { k: '⾱', e: 'leather', j: 'なめしがわ', p: positions.NILL },
    { k: '⿂', e: 'fish', j: 'うお', p: positions.NILL },
    { k: '⿃', e: 'bird', j: 'とり', p: positions.NILL },
    { k: '⿄', e: 'salt', j: 'しお', p: positions.NILL },
    { k: '⿅', e: 'deer', j: 'しか', p: positions.NILL },
    { k: '⿆', e: 'wheat', j: 'むぎ', p: positions.NILL },
    { k: '⿇', e: 'hemp', j: 'あさ', p: positions.NILL },
    { k: '⻩', e: 'yellow', j: 'き', p: positions.NILL },
    { k: '黒', e: 'black', j: 'くろ', p: positions.NILL },
    { k: '⻲', e: 'turtle', j: 'かめ', p: positions.NILL },
    { k: '⿈', e: 'yellow', j: 'き', p: positions.NILL },
    { k: '⿉', e: 'millet', j: 'きび', p: positions.NILL },
    { k: '⿊', e: 'black', j: 'くろ', p: positions.NILL },
    { k: '⿋', e: 'embroider', j: 'ぬいとり', p: positions.NILL },
    { k: '⻭', e: 'tooth', j: 'は', p: positions.NILL },
    { k: '⿌', e: 'frog', j: 'かえる', p: positions.NILL },
    { k: '⿍', e: 'tripod', j: 'かなえ', p: positions.NILL },
    { k: '⿎', e: 'drum', j: 'つづみ', p: positions.NILL },
    { k: '⿏', e: 'rat, mouse', j: 'ねずみ', p: positions.NILL },
    { k: '⿐', e: 'nose', j: 'はな', p: positions.NILL },
    { k: '⿑', e: 'alike', j: 'せい', p: positions.NILL },
    { k: '⿒', e: 'tooth', j: 'は', p: positions.NILL },
    { k: '⿓', e: 'dragon', j: 'りゅう', p: positions.NILL },
    { k: '⿔', e: 'turtle', j: 'かめ', p: positions.NILL },
    { k: '⿕', e: 'flute', j: 'やく', p: positions.NILL }
]

function filterByType(placement_of_radical) {
    const subset = radicals.filter(function (obj) {
        return obj.p === placement_of_radical
    })
    return subset
}

////


try {
    if (require.main === module) {
        // self-test 
        function data_test() {
            let isOkShape = true
            let seen = {}
            radicals.forEach((obj, i) => {
                if (obj.k.length > 0) {
                    //console.log(obj.k, obj.p)
                    try {
                        if (obj.k.length < 1 || obj.e.length < 1 || obj.j.length < 1 || obj.p.length < 1) {
                            isOkShape = false
                            console.log(obj)
                        }
                        if (seen.hasOwnProperty(obj.p)) {
                            seen[obj.p]++
                        } else {
                            seen[obj.p] = 1
                        }
                    } catch (boom) {
                        console.log("boom " + obj)
                    }
                }
            })

            function compareMaps(map1, map2) {
                for (let key in map1) {
                    if (!map2.hasOwnProperty(key)) {
                        console.log("\t\tKEY is MISSING=" + key)
                        return false;
                    }
                }
                return true;
            }

            const a = compareMaps(positions, seen)
            const b = compareMaps(seen, positions)
            const isOkSeen = a === b && a === true

            const verdict = isOkShape === true ? "PASS " : "FAIL "
            console.log(verdict + " member shape test")
            const verdict2 = isOkSeen === true ? "PASS " : "FAIL "
            console.log(verdict2 + " data inclusion test")
        }
        data_test()
    }
} catch (boom) {
    if (boom.message === "require is not defined") {
        // ignore this - the self-test uses a require.main which does not make sense is a browser context
    } else {
        console.log("%c \t*** " + boom.message + "\t *** ", "background:red;color:white;")
    }
}