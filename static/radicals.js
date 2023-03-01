
// KEY:
// k = kanji
// e = english 
// j = japanese reading 
// p = position 
const NILL = "NILL"
const LEFT = "LEFT"  // hen 
const TOP = "TOP" // kanmuri
const RIGHT = "RIGHT" // tsukuri
const BOTTOM = "BOTTOM" // ashi
const LEFT_BOTTOM = "LEFT_BOTTOM" // nyou
const LEFT_TOP_RIGHT = "LEFT_TOP_RIGHT" // kamae
const TOP_RIGHT = "TOP_RIGHT" // kamae
const LEFT_TOP_BOTTOM = "LEFT_TOP_BOTTOM" // kamae
const LEFT_TOP = "LEFT_TOP" // tare
const ALL = "ALL" // I suppose this would be kamae also?
const UPPERLEFT_CENTER_BOTTOMRIGHT = "UPPERLEFT_CENTER_BOTTOMRIGHT" // kamae
const LEFT_BOTTOM_RIGHT = "LEFT_BOTTOM_RIGHT" // kamae





const radicals = [
    { k: '⼀', e: 'one, horizontal stroke', j: 'いち', p: NILL },
    { k: '⼁', e: 'vertical stroke', j: 'たてぼう', p: NILL },
    { k: '⼂', e: 'dot', j: 'てん', p: NILL },
    { k: '⼃', e: 'diagonal sweeping stroke', j: 'の', p: NILL },
    { k: '⼄', e: 'the second', j: 'おつ', p: NILL },
    { k: '⺃', e: 'the second', j: 'おつ', p: NILL },
    { k: '⼅', e: 'vertical stroke with a hook', j: 'はねぼう', p: NILL },
    { k: '⼆', e: 'two', j: 'に', p: NILL },
    { k: '⼇', e: 'lid, top', j: 'なべぶた', p: TOP },
    { k: '⼈', e: 'person', j: 'ひと', p: NILL },
    { k: '⺅', e: 'person', j: 'にんべん', p: LEFT },
    { k: '𠆢', e: 'person', j: 'ひとやね', p: TOP },
    { k: '⼉', e: 'human legs', j: 'ひとあし', p: BOTTOM },
    { k: '⼊', e: 'to enter', j: 'いる', p: NILL },
    { k: '⼋', e: 'eight', j: 'はち', p: NILL },
    { k: '⼌', e: 'to enclose', j: 'けいがまえ', p: LEFT_TOP_RIGHT },
    { k: '⼍', e: 'cover, crown', j: 'わかんむり', p: TOP },
    { k: '⼎', e: 'ice', j: 'にすい', p: LEFT },
    { k: '⼏', e: 'table', j: 'きにょう', p: RIGHT },
    { k: '⺇', e: 'wind', j: 'かぜかんむり', p: TOP },
    { k: '⼐', e: 'container, open box', j: 'かんにょう', p: LEFT_BOTTOM_RIGHT },
    { k: '⼑', e: 'knife, sword', j: 'かたな', p: NILL },
    { k: '⺉', e: 'knife, sword', j: 'りっとう', p: RIGHT },
    { k: '⼒', e: 'power', j: 'ちから', p: NILL },
    { k: '⼓', e: 'to wrap', j: 'つつみがまえ', p: TOP_RIGHT },
    { k: '⼔', e: 'spoon', j: 'さじ', p: RIGHT },
    { k: '⼕', e: 'box', j: 'はこがまえ', p: LEFT_TOP_BOTTOM },
    { k: '⼖', e: 'to conceal, hide', j: 'かくしがまえ', p: LEFT_TOP_BOTTOM },
    { k: '⼗', e: 'ten', j: 'じゅう', p: NILL },
    { k: '⼘', e: 'oracle', j: 'ぼく', p: NILL },
    { k: '⼙', e: 'stamp, seal', j: 'ふしづくり', p: RIGHT },
    { k: '⼚', e: 'cliff', j: 'がんだれ', p: LEFT_TOP },
    { k: '⼛', e: 'private, Katakana Mu', j: 'む', p: NILL },
    { k: '⼜', e: 'again, right hand', j: 'また', p: NILL },
    { k: '⼝', e: 'mouth', j: 'くち', p: NILL },
    { k: '', e: 'mouth', j: 'くちへん', p: LEFT },
    {
        k: '⼞',
        e: 'border, territorial boundaries',
        j: 'くにがまえ',
        p: NILL
    },
    { k: '⼟', e: 'earth', j: 'つち', p: NILL },
    { k: '', e: 'earth', j: 'つちへん', p: NILL },
    { k: '⼠', e: 'man, scholar, samurai', j: 'さむらい', p: NILL },
    { k: '', e: 'man, scholar, samurai', j: 'さむらいかんむり', p: NILL },
    { k: '⼡', e: 'to follow', j: 'のまた', p: NILL },
    { k: '⼢', e: 'to go slowly', j: 'なつあし', p: NILL },
    { k: '⼣', e: 'evening', j: 'ゆうべ', p: NILL },
    { k: '⼤', e: 'large, big', j: 'だい', p: NILL },
    { k: '⼥', e: 'woman', j: 'おんな', p: NILL },
    { k: '', e: 'woman', j: 'おんなへん', p: NILL },
    { k: '⼦', e: 'child, son', j: 'こ', p: NILL },
    { k: '⼧', e: 'roof, house', j: 'うかんむり', p: NILL },
    { k: '⼨', e: 'inch, (2.25 cm)', j: 'すん', p: NILL },
    { k: '⼩', e: 'small', j: 'しょう', p: NILL },
    { k: '⺌', e: 'small', j: 'しょうかんむり', p: NILL },
    { k: '⺐', e: 'lame leg', j: 'だいのまげあし', p: NILL },
    { k: '⼫', e: 'corpse, awning', j: 'しかばね', p: NILL },
    { k: '⼬', e: 'sprout', j: 'くさのめ', p: NILL },
    { k: '⼭', e: 'mountain', j: 'やま', p: NILL },
    { k: '⼮', e: 'winding river', j: 'まがりがわ', p: NILL },
    { k: '川', e: 'river', j: 'さんぼんがわ', p: NILL },
    { k: '⼯', e: 'work, carpenter, skill', j: 'たくみ', p: NILL },
    { k: '⼰', e: 'self', j: 'おのれ', p: NILL },
    { k: '⼱', e: 'cloth', j: 'はば', p: NILL },
    { k: '⼲', e: 'to dry, shield', j: 'かん', p: NILL },
    { k: '⺓', e: 'young, slight', j: 'いとがしら', p: NILL },
    { k: '⼴', e: 'slanting roof', j: 'まだれ', p: NILL },
    { k: '⼵', e: 'to move, stretch', j: 'えんにょう', p: NILL },
    { k: '⼶', e: 'folded hands', j: 'にじゅうあし', p: NILL },
    { k: '⼷', e: 'javelin', j: 'いぐるみ', p: NILL },
    { k: '⼸', e: 'bow （in archery）', j: 'ゆみ', p: NILL },
    { k: '⼹', e: 'pig’s head', j: 'けいがしら', p: NILL },
    { k: '⺕', e: 'pig’s head', j: 'けいがしら', p: NILL },
    { k: '⺔', e: 'pig’s head', j: 'けいがしら', p: NILL },
    { k: '⼺', e: 'hair-style, light rays', j: 'さんづくり', p: NILL },
    {
        k: '⼻',
        e: 'step, stride, street, to go',
        j: 'ぎょうにんべん',
        p: NILL
    },
    { k: '⺾', e: 'grass', j: 'くさかんむり', p: NILL },
    { k: '⻌', e: 'road, walk, to advance', j: 'しんにょう', p: NILL },
    { k: '⻏', e: 'village, country, city', j: 'おおざと', p: NILL },
    { k: '⻖', e: 'hill, mound', j: 'こざとへん', p: NILL },
    { k: '⺍', e: 'Katakana Tsu', j: 'つ', p: NILL },
    { k: '⺖', e: 'heart, mind, spirit', j: 'りっしんべん', p: NILL },
    { k: '⺘', e: 'hand', j: 'てへん', p: NILL },
    { k: '⺡', e: 'water', j: 'さんずい', p: NILL },
    { k: '⺨', e: 'beast', j: 'けものへん', p: NILL },
    { k: '⼼', e: 'heart, mind, spirit', j: 'こころ', p: NILL },
    { k: '⺗', e: 'heart, mind, spirit', j: 'したごころ', p: NILL },
    { k: '⼽', e: 'spear, weapon', j: 'ほこ', p: NILL },
    { k: '⼾', e: 'door', j: 'と', p: NILL },
    { k: '⼿', e: 'hand', j: 'て', p: NILL },
    { k: '⽀', e: 'branch', j: 'しにょう', p: NILL },
    { k: '⽁', e: 'activity, to strike, hit', j: 'ぼくづくり', p: NILL },
    { k: '⺙', e: 'activity, to strike, hit', j: 'ぼくづくり', p: NILL },
    { k: '⽂', e: 'literature, letters', j: 'ぶん', p: NILL },
    { k: '⽃', e: 'big dipper, ladle, 18 liters', j: 'ますづくり', p: NILL },
    { k: '⽄', e: 'axe', j: 'おのづくり', p: NILL },
    { k: '⽅', e: 'direction, flag', j: 'ほう', p: NILL },
    { k: '⽆', e: 'not', j: 'むにょう', p: NILL },
    { k: '⽇', e: 'sun, day, time', j: 'ひ', p: NILL },
    { k: '⽈', e: 'to say', j: 'ひらび', p: NILL },
    { k: '⽉', e: 'moon, month, period', j: 'つき', p: NILL },
    { k: '⺝', e: 'moon, month, period', j: 'つきへん', p: NILL },
    { k: '⽊', e: 'tree, wood', j: 'き', p: NILL },
    { k: '⽋', e: 'to lack, yawn', j: 'あくび', p: NILL },
    { k: '⽌', e: 'to stop', j: 'とめる', p: NILL },
    {
        k: '⽍',
        e: 'death &amp; dying, to decompose',
        j: 'がつ',
        p: NILL
    },
    { k: '⽎', e: 'lance shaft, action', j: 'るまた', p: NILL },
    { k: '⽏', e: 'not, mother', j: 'なかれ', p: NILL },
    { k: '⽐', e: 'to compare', j: 'くらべる', p: NILL },
    { k: '⽑', e: 'hair', j: 'け', p: NILL },
    { k: '⽒', e: 'family, clan', j: 'うじ', p: NILL },
    { k: '⽓', e: 'steam, air', j: 'きがまえ', p: NILL },
    { k: '⽔', e: 'water', j: 'みず', p: NILL },
    { k: '⽕', e: 'fire', j: 'ひ', p: NILL },
    { k: '⺣', e: 'fire', j: 'れっか', p: NILL },
    { k: '⽖', e: 'claw, nail', j: 'つめ', p: NILL },
    { k: '⺤', e: 'claw, nail', j: 'つめかんむり', p: NILL },
    { k: '爫', e: 'claw, nail', j: 'つめかんむり', p: NILL },
    { k: '⽗', e: 'father', j: 'ちち', p: NILL },
    { k: '⽘', e: 'to mix', j: 'こう', p: NILL },
    { k: '⽙', e: 'split wood', j: 'しょうへん', p: NILL },
    { k: '⽚', e: 'split wood', j: 'かた', p: NILL },
    { k: '⽜', e: 'cow', j: 'うし', p: NILL },
    { k: '⽝', e: 'dog', j: 'いぬ', p: NILL },
    {
        k: '⺭',
        e: 'altar, festival, religious service',
        j: 'しめすへん',
        p: NILL
    },
    { k: '㓁', e: 'net', j: 'あみがしら', p: NILL },
    { k: '⺹', e: 'old, old-age', j: 'おいかんむり', p: NILL },
    { k: '⽞', e: 'darkness', j: 'げん', p: NILL },
    { k: '⽟', e: 'jewelry', j: 'たま', p: NILL },
    { k: '⽡', e: 'tile', j: 'かわら', p: NILL },
    { k: '⽢', e: 'sweet', j: 'あまい', p: NILL },
    { k: '⽣', e: 'birth, to be born, live', j: 'うまれる', p: NILL },
    { k: '⽤', e: 'to use', j: 'もちいる', p: NILL },
    { k: '⽥', e: 'rice paddy', j: 'た', p: NILL },
    { k: '⽦', e: 'bolt of cloth', j: 'ひき', p: NILL },
    { k: '⺪', e: 'bolt of cloth', j: 'ひきへん', p: NILL },
    { k: '⽧', e: 'sickness', j: 'やまいだれ', p: NILL },
    { k: '⽨', e: 'outspread legs, departure', j: 'はつがしら', p: NILL },
    { k: '⽩', e: 'white', j: 'しろ', p: NILL },
    { k: '⽪', e: 'skin, hide', j: 'けがわ', p: NILL },
    { k: '⽫', e: 'plate, bowl', j: 'さら', p: NILL },
    { k: '⽬', e: 'eye', j: 'め', p: NILL },
    { k: '⽭', e: 'halberd', j: 'ほこ', p: NILL },
    { k: '⽮', e: 'arrow', j: 'や', p: NILL },
    { k: '⽯', e: 'stone', j: 'いし', p: NILL },
    { k: '⽱', e: 'footprint', j: 'じゅうのあし', p: NILL },
    { k: '⽲', e: 'grain', j: 'のぎへん', p: NILL },
    { k: '⽳', e: 'hole, cave', j: 'あな', p: NILL },
    { k: '⽴', e: 'to stand', j: 'たつ', p: NILL },
    { k: '氺', e: 'water', j: 'したみず', p: NILL },
    { k: '⺫', e: 'net', j: 'あみがしら', p: NILL },
    { k: '𦉰', e: 'net', j: 'あみがしら', p: NILL },
    { k: '⻂', e: 'clothing', j: 'ころもへん', p: NILL },
    { k: '⺛', e: 'not', j: 'むにょう', p: NILL },
    { k: '⽵', e: 'bamboo', j: 'たけ', p: NILL },
    { k: '⺮', e: 'bamboo', j: 'たけかんむり', p: NILL },
    { k: '⽶', e: 'rice', j: 'こめ', p: NILL },
    { k: '⽷', e: 'thread', j: 'いと', p: NILL },
    { k: '⽸', e: 'earthen jar', j: 'みずがめ', p: NILL },
    { k: '⽹', e: 'net', j: 'あみめ', p: NILL },
    { k: '⽺', e: 'sheep', j: 'ひつじ', p: NILL },
    { k: '⺷', e: 'sheep', j: 'ひつじ', p: NILL },
    { k: '羽', e: 'feather, wing', j: 'はね', p: NILL },
    { k: '⽻', e: 'feather, wing', j: 'はね', p: NILL },
    { k: '⽼', e: 'old, old-age', j: 'おいかんむり', p: NILL },
    { k: '⽽', e: 'and also', j: 'しこうして', p: NILL },
    { k: '⽾', e: 'plow', j: 'らいすき', p: NILL },
    { k: '⽿', e: 'ear', j: 'みみ', p: NILL },
    { k: '⾀', e: 'writing brush', j: 'ふでづくり', p: NILL },
    { k: '⾁', e: 'flesh, meat', j: 'にく', p: NILL },
    { k: '⾂', e: 'retainer, minister', j: 'しん', p: NILL },
    { k: '⾃', e: 'self', j: 'みずから', p: NILL },
    { k: '⾄', e: 'to arrive, reach', j: 'いたる', p: NILL },
    { k: '⾅', e: 'mortar, quern', j: 'うす', p: NILL },
    { k: '⾆', e: 'tongue', j: 'した', p: NILL },
    { k: '⾇', e: 'contrary, to err', j: 'まいあし', p: NILL },
    { k: '⾈', e: 'ship, boat', j: 'ふね', p: NILL },
    { k: '⾉', e: 'boundary', j: 'こん', p: NILL },
    { k: '⾊', e: 'color', j: 'いろ', p: NILL },
    { k: '⾋', e: 'grass, plant', j: 'くさ', p: NILL },
    { k: '⾌', e: 'tiger', j: 'とらがしら', p: NILL },
    { k: '⾍', e: 'worm, insect, bug', j: 'むし', p: NILL },
    { k: '⾎', e: 'blood', j: 'ち', p: NILL },
    { k: '⾏', e: 'to go', j: 'ぎょうがまえ', p: NILL },
    { k: '⾐', e: 'clothing', j: 'ころも', p: NILL },
    { k: '⾑', e: 'cover, west', j: 'にし', p: NILL },
    { k: '⻃', e: 'cover, west', j: 'にし', p: NILL },
    { k: '⽠', e: 'melon', j: 'うり', p: NILL },
    { k: '⾒', e: 'to see', j: 'みる', p: NILL },
    { k: '⾓', e: 'horn, corner', j: 'つの', p: NILL },
    { k: '⾔', e: 'words, to speak, say', j: 'げん', p: NILL },
    { k: '⾕', e: 'valley', j: 'たに', p: NILL },
    { k: '⾖', e: 'bean', j: 'まめ', p: NILL },
    { k: '⾗', e: 'pig', j: 'いのこ', p: NILL },
    { k: '⾘', e: 'badger', j: 'むじなへん', p: NILL },
    { k: '⾙', e: 'shell, property, wealth', j: 'かい', p: NILL },
    { k: '⾚', e: 'red', j: 'あか', p: NILL },
    { k: '⾛', e: 'to run', j: 'はしる', p: NILL },
    { k: '⾜', e: 'foot, leg', j: 'あし', p: NILL },
    { k: '⻊', e: 'foot, leg', j: 'あしへん', p: NILL },
    { k: '⾝', e: 'body', j: 'み', p: NILL },
    { k: '⾞', e: 'vehicle, wheel, car', j: 'くるま', p: NILL },
    { k: '⾟', e: 'bitter', j: 'からい', p: NILL },
    { k: '⾠', e: 'Fifth zodiac sign, 7–9 A.M.', j: 'しんのたつ', p: NILL },
    { k: '⾡', e: 'to advance, move ahead', j: 'しんにょう', p: NILL },
    { k: '⾢', e: 'community', j: 'むら', p: NILL },
    { k: '⾣', e: 'sake jar, bird', j: 'ひよみのとり', p: NILL },
    { k: '⾤', e: 'to separate', j: 'のごめ', p: NILL },
    { k: '', e: 'to separate', j: 'のごめへん', p: NILL },
    { k: '⾥', e: 'village, (3.93 km)', j: 'さと', p: NILL },
    { k: '', e: 'village, (3.93 km)', j: 'さとへん', p: NILL },
    { k: '⾂', e: 'retainer, minister', j: 'しん', p: NILL },
    { k: '', e: 'contrary, to err', j: 'まいあし', p: NILL },
    { k: '⻨', e: 'wheat', j: 'むぎ', p: NILL },
    { k: '⾦', e: 'metal, gold, mineral', j: 'かね', p: NILL },
    { k: '', e: 'metal, gold, mineral', j: 'かねへん', p: NILL },
    { k: '⻑', e: 'long', j: 'ながい', p: NILL },
    { k: '⾨', e: 'gate, door', j: 'もんがまえ', p: NILL },
    { k: '⾩', e: 'hill', j: 'こざと', p: NILL },
    { k: '⾪', e: 'to capture', j: 'れいづくり', p: NILL },
    { k: '⾫', e: 'small bird', j: 'ふるとり', p: NILL },
    { k: '⾬', e: 'rain', j: 'あめ', p: NILL },
    { k: '⻗', e: 'rain', j: 'あめかんむり', p: NILL },
    { k: '⾭', e: 'blue, green', j: 'あお', p: NILL },
    { k: '⻘', e: 'blue, green', j: 'あお', p: NILL },
    { k: '⾮', e: 'wrong, non-', j: 'あらず', p: NILL },
    { k: '⻟', e: 'food, to eat', j: 'しょくへん', p: NILL },
    { k: '⻫', e: 'alike', j: 'せい', p: NILL },
    { k: '⾯', e: 'face, surface', j: 'めん', p: NILL },
    { k: '⾰', e: 'leather', j: 'つくりがわ', p: NILL },
    { k: '', e: 'leather', j: 'なめしがわ', p: NILL },
    { k: '⾲', e: 'leek', j: 'にら', p: NILL },
    { k: '⾳', e: 'sound, noise', j: 'おと', p: NILL },
    { k: '⾴', e: 'head, page', j: 'おおがい', p: NILL },
    { k: '⾵', e: 'wind', j: 'かぜ', p: NILL },
    { k: '⾶', e: 'to fly', j: 'とぶ', p: NILL },
    { k: '⾷', e: 'food, to eat', j: 'しょく', p: NILL },
    { k: '⾸', e: 'head', j: 'くび', p: NILL },
    { k: '⾹', e: 'scent', j: 'かおり', p: NILL },
    { k: '⾺', e: 'horse', j: 'うま', p: NILL },
    { k: '', e: 'horse', j: 'うまへん', p: NILL },
    { k: '⾻', e: 'bone', j: 'ほね', p: NILL },
    { k: '', e: 'bone', j: 'ほねへん', p: NILL },
    { k: '⾼', e: 'high', j: 'たかい', p: NILL },
    { k: '⾽', e: 'long hair', j: 'かみかんむり', p: NILL },
    { k: '⾾', e: 'fighting', j: 'たたかいがまえ', p: NILL },
    { k: '⾿', e: 'herbs', j: 'においざけ', p: NILL },
    { k: '⿀', e: 'tripod', j: 'れき', p: NILL },
    { k: '⿁', e: 'demon', j: 'おに', p: NILL },
    { k: '⾱', e: 'leather', j: 'なめしがわ', p: NILL },
    { k: '⿂', e: 'fish', j: 'うお', p: NILL },
    { k: '', e: 'fish', j: 'うおへん', p: NILL },
    { k: '⿃', e: 'bird', j: 'とり', p: NILL },
    { k: '⿄', e: 'salt', j: 'しお', p: NILL },
    { k: '⿅', e: 'deer', j: 'しか', p: NILL },
    { k: '⿆', e: 'wheat', j: 'むぎ', p: NILL },
    { k: '⿇', e: 'hemp', j: 'あさ', p: NILL },
    { k: '', e: 'hemp', j: 'あさかんむり', p: NILL },
    { k: '⻩', e: 'yellow', j: 'き', p: NILL },
    { k: '黒', e: 'black', j: 'くろ', p: NILL },
    { k: '⻲', e: 'turtle', j: 'かめ', p: NILL },
    { k: '⿈', e: 'yellow', j: 'き', p: NILL },
    { k: '⿉', e: 'millet', j: 'きび', p: NILL },
    { k: '⿊', e: 'black', j: 'くろ', p: NILL },
    { k: '⿋', e: 'embroider', j: 'ぬいとり', p: NILL },
    { k: '⻭', e: 'tooth', j: 'は', p: NILL },
    { k: '⿌', e: 'frog', j: 'かえる', p: NILL },
    { k: '⿍', e: 'tripod', j: 'かなえ', p: NILL },
    { k: '⿎', e: 'drum', j: 'つづみ', p: NILL },
    { k: '⿏', e: 'rat, mouse', j: 'ねずみ', p: NILL },
    { k: '⿐', e: 'nose', j: 'はな', p: NILL },
    { k: '⿑', e: 'alike', j: 'せい', p: NILL },
    { k: '⿒', e: 'tooth', j: 'は', p: NILL },
    { k: '⿓', e: 'dragon', j: 'りゅう', p: NILL },
    { k: '⿔', e: 'turtle', j: 'かめ', p: NILL },
    { k: '⿕', e: 'flute', j: 'やく', p: NILL }
]

function filterByType() { 
    const subset = radicals.filter(function (obj) {
      return obj.p === TOP
    })
    return subset
}

function getRadicals_top() { 
    return filterByType(TOP)
}
function getRadicals_bottom() { 
    return filterByType(BOTTOM)
}




try {
    if (require.main === module) {

        // self-test 
        function dataShapeIsOk_test() {
            let isOk = true
            radicals.forEach((obj, i) => {
                if (obj.k.length > 0) {
                    //console.log(obj.k, obj.p)
                    try {
                        if (obj.k.length < 1 || obj.e.length < 1 || obj.j.length < 1 || obj.p.length < 1) {
                            isOk = false
                            console.log(obj)
                        }
                    } catch (boom) {
                        console.log("boom " + obj)
                    }
                }
            })
            const verdict = isOk === true ? "PASS " : "FAIL "
            console.log( verdict + " dataShapeIsOk_test")
        }
    }
    function getRadicals_top_test() { 
        const actual = getRadicals_top(TOP) 
        const verdict = actual.length > 0 ? "PASS " : "FAIL "; 
        console.log( verdict + "getRadicals_top_test " + actual.length )
    }

    function getRadicals_bottom_test() { 
        const actual = getRadicals_bottom(TOP) 
        const verdict = actual.length > 0 ? "PASS " : "FAIL "; 
        console.log( verdict + "getRadicals_bottom_test " + actual.length )
    }

    dataShapeIsOk_test()
    getRadicals_top_test()
    getRadicals_bottom_test()


} catch (boom) {
    if (boom.message === "require is not defined") {
        // ignore this - the self-test uses a require.main which does not make sense is a browser context
    } else {
        console.log("%c \t*** " + boom.message + "\t *** ", "background:red;color:white;")
    }
}
