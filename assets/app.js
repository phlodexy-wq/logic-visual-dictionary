const terms = [
  {id:"S",title:"S（結論の主語項）",description:"三段論法で、結論の主語となる項につける役割記号です。特定の集合や円と同じ意味ではありません。",page:"euler",message:"Sは結論の主語項を表す役割記号です。"},
  {id:"M",title:"M（媒概念）",description:"三段論法の二つの前提をつなぐ項につける役割記号です。結論には現れず、具体的な集合名と同じものではありません。",page:"euler",message:"Mは二つの前提をつなぐ媒概念の役割記号です。"},
  {id:"P",title:"P（結論の述語項）",description:"三段論法で、結論の述語となる項につける役割記号です。命題変数や特定の集合と同じ意味ではありません。",page:"euler",message:"Pは結論の述語項を表す役割記号です。"},
  {id:"subject",title:"主語（Subject）",description:"個々の命題で話題の対象となる項です。推論によって、S・M・Pのどの役割記号に対応するかが変わります。",page:"euler",message:"主語は命題ごとに決まります。選択した図では主語欄に示します。"},
  {id:"predicate",title:"述語（Predicate）",description:"個々の命題で主語について述べる項です。推論内の役割記号Pと常に同一とは限りません。",page:"euler",message:"述語は命題ごとに決まります。選択した図では述語欄に示します。"},
  {id:"universal",title:"全称",description:"主語が指す対象すべてについて述べる量です。「すべての〜は」「どの〜も〜ない」などの形です。",page:"euler",message:"全称命題の例をオイラー図で確認しています。"},
  {id:"singular",title:"単称",description:"特定の一個体について述べる命題です。特称（少なくとも一つの対象）とは区別されます。",page:"euler",message:"単称は一つの個体について述べ、特称は一つ以上の対象の存在を述べます。"},
  {id:"particular",title:"特称",description:"主語が指す対象のうち、少なくとも一つについて述べる量です。「ある〜は〜である」などの形です。",page:"euler",message:"特称命題の例をオイラー図の×印で確認しています。"},
  {id:"class",title:"クラス（集合）",description:"ある性質をもつ対象の集まりです。図の円は具体的なクラスを表し、S・M・Pの記号そのものではありません。",page:"euler",message:"円は命題に登場するクラスを表します。"},
  {id:"inclusion",title:"包摂",description:"一方のクラスの要素がすべて他方にも含まれる関係です。図では一つの円をもう一方の円の内側に描きます。",page:"euler",message:"包摂関係の例をオイラー図で確認しています。"},
  {id:"existence",title:"存在記号（×）",description:"×は、その領域に少なくとも一つ対象が存在することを示します。塗りつぶしとは別の情報です。",page:"euler",message:"×は選択した領域に1つ以上の対象が存在することを示します。"},
  {id:"SaP",title:"SaP（全称肯定）",description:"「すべてのSはPである」を表す伝統的な記号です。包摂関係を示し、存在を主張する×は付けません。",page:"euler",message:"SaPは「すべてのSはPである」を表します。"},
  {id:"SeP",title:"SeP（全称否定）",description:"「どのSもPではない」を表す伝統的な記号です。全称命題なので、Sの存在を主張する×は置きません。",page:"euler",message:"SePは「どのSもPではない」を表します。"},
  {id:"SiP",title:"SiP（特称肯定）",description:"「あるSはPである」を表す伝統的な記号です。×は白い共通領域S∩Pに置きます。",page:"euler",message:"SiPは「あるSはPである」を表します。"},
  {id:"SoP",title:"SoP（特称否定）",description:"「あるSはPでない」を表す伝統的な記号です。×は白いS∖Pの領域に置きます。",page:"euler",message:"SoPは「あるSはPでない」を表します。"},
  {id:"A",title:"A（全称肯定）",description:"「すべてのSはPである」。伝統的な形式ではA命題と呼びます。",page:"euler",message:"A命題「すべてのSはPである」を確認しています。"},
  {id:"E",title:"E（全称否定）",description:"「どのSもPではない」。伝統的な形式ではE命題と呼びます。",page:"euler",message:"E命題「どのSもPではない」を確認しています。"},
  {id:"I",title:"I（特称肯定）",description:"「あるSはPである」。少なくとも一つのSがPでもあります。",page:"euler",message:"I命題「あるSはPである」を確認しています。"},
  {id:"O",title:"O（特称否定）",description:"「あるSはPではない」。少なくとも一つのSがPの外にあります。",page:"euler",message:"O命題「あるSはPではない」を確認しています。"},
  {id:"contradiction",title:"矛盾対当",description:"二つの命題のうち、必ず一方が真で、もう一方が偽になる関係です。",page:"opposition",message:"矛盾対当はA-O、E-Iの組み合わせです。必ず一方が真で一方が偽です。"},
  {id:"contrary",title:"反対対当",description:"両方が真になることはありませんが、両方が偽になることはあります。",page:"opposition",message:"反対対当はA-Eの関係です。両方が真になることはありません。"},
  {id:"subcontrary",title:"小反対対当",description:"両方が偽になることはありませんが、両方が真になることはあります。",page:"opposition",message:"小反対対当はI-Oの関係です。両方が偽になることはありません。"},
  {id:"subalternation",title:"大小対当",description:"伝統的対当論では、全称命題が真なら対応する特称命題も真とします。",page:"opposition",message:"大小対当はA-I、E-Oの関係です。伝統的対当論では全称から特称への真が伝わります。"},
  {id:"and",title:"連言（かつ / ∧）",description:"PとQの両方が真のときだけ、全体が真になる演算です。",page:"truth-table",message:"連言P∧Qは、PとQの両方が真のときだけ真になります。"},
  {id:"or",title:"選言（または / ∨）",description:"PとQの少なくとも一方が真なら、全体が真になる演算です。",page:"truth-table",message:"選言P∨Qは、PとQの少なくとも一方が真なら真になります。"},
  {id:"implies",title:"含意（ならば / →）",description:"P→Qは、Pが真でQが偽の場合にだけ偽になります。",page:"truth-table",message:"含意P→Qは、Pが真でQが偽のときだけ偽になります。"},
  {id:"iff",title:"同値（↔）",description:"PとQの真偽が一致するとき真になる演算です。",page:"truth-table",message:"同値P↔Qは、PとQの真偽が一致するとき真になります。"},
  {id:"tableau",title:"タブロー法",description:"結論を偽と仮定し、前提と矛盾するかどうかを枝分かれで調べる証明法です。",page:"tableau",message:"タブロー法では、結論を偽と仮定して反例の有無を調べます。"},
  {id:"closed",title:"閉じた枝",description:"同じ枝にRと¬Rのような矛盾が現れ、反例にならない枝です。",page:"tableau",message:"閉じた枝は前提と結論の否定が矛盾することを示します。"},
  {id:"open",title:"開いた枝",description:"矛盾せずに残った枝です。前提を真、結論を偽にする反例を示します。",page:"tableau",message:"開いた枝は、前提が真で結論が偽になる反例を示します。"}
];

const pagePaths = {
  euler: "chapters/euler.html",
  opposition: "chapters/opposition.html",
  "truth-table": "chapters/truth-table.html",
  tableau: "chapters/tableau.html",
  dictionary: "dictionary.html"
};

const root = document.body.dataset.root || "";
const currentPage = document.body.dataset.page;
const pageUrl = page => `${root}${pagePaths[page]}`;

function renderNavigation() {
  const nav = document.querySelector("[data-site-nav]");
  if (!nav) return;
  const links = [
    ["home", "index.html", "ホーム"],
    ["euler", "chapters/euler.html", "① オイラー図"],
    ["opposition", "chapters/opposition.html", "② 真偽の表"],
    ["truth-table", "chapters/truth-table.html", "③ 真理表"],
    ["tableau", "chapters/tableau.html", "④ タブロー法"],
    ["dictionary", "dictionary.html", "用語辞書"]
  ];
  links.forEach(([id, href, label]) => {
    const link = document.createElement("a");
    link.href = `${root}${href}`;
    link.textContent = label;
    if (id === currentPage) link.setAttribute("aria-current", "page");
    nav.append(link);
  });
}

function makeTermCard(term, linkMode) {
  const card = document.createElement(linkMode ? "a" : "button");
  card.className = "dict-item";
  card.dataset.dictionaryTerm = term.id;
  if (linkMode) {
    card.href = `${pageUrl(term.page)}?term=${encodeURIComponent(term.id)}`;
  } else {
    card.type = "button";
  }
  const title = document.createElement("span");
  title.className = "dict-title";
  title.textContent = term.title;
  const description = document.createElement("span");
  description.className = "dict-desc";
  description.textContent = term.description;
  card.append(title, description);
  return card;
}

function renderDictionary() {
  document.querySelectorAll("[data-dictionary-frame]").forEach(frame => {
    const heading = document.createElement("h2");
    heading.textContent = "用語辞書";
    const hint = document.createElement("p");
    hint.className = "hint";
    hint.textContent = "用語を選ぶと、対応する章や図表が開きます。";
    const list = document.createElement("div");
    list.className = "dictionary";
    terms.forEach(term => list.append(makeTermCard(term, false)));
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "dictionary-popup";
    popup.setAttribute("role", "status");
    popup.setAttribute("aria-live", "polite");
    frame.append(heading, hint, list, popup);
  });
  const fullList = document.querySelector("[data-dictionary-list]");
  if (fullList) terms.forEach(term => fullList.append(makeTermCard(term, true)));
}

function setActiveTerm(term) {
  document.querySelectorAll("[data-dictionary-term]").forEach(card => {
    card.classList.toggle("is-active", card.dataset.dictionaryTerm === term);
  });
  document.querySelectorAll("[data-term-node]").forEach(node => {
    node.classList.toggle("is-active", node.dataset.termNode === term);
  });
  document.querySelectorAll("[data-aeio]").forEach(node => {
    node.classList.toggle("is-active", node.dataset.aeio === term);
  });
}

const eulerLayouts = {
  overlap: {
    title:"SとPが交差", viewBox:"0 0 620 330",
    circles:[
      {id:"S",cx:245,cy:180,r:108,label:{x:192,y:125}},
      {id:"P",cx:365,cy:180,r:108,label:{x:418,y:125}}
    ],
    regions:[
      {id:"outside",title:"円の外",inside:[],outside:["S","P"],point:{x:310,y:315}},
      {id:"s-only",title:"Sのみ（S∖P）",inside:["S"],outside:["P"],point:{x:192,y:180}},
      {id:"intersection",title:"共通部分（S∩P）",inside:["S","P"],outside:[],point:{x:305,y:180}},
      {id:"p-only",title:"Pのみ（P∖S）",inside:["P"],outside:["S"],point:{x:418,y:180}}
    ]
  },
  "subject-inside-predicate": {
    title:"SがPに含まれる", viewBox:"0 0 620 330",
    circles:[
      {id:"S",cx:310,cy:180,r:70,label:{x:310,y:180}},
      {id:"P",cx:310,cy:180,r:132,label:{x:310,y:75}}
    ],
    regions:[
      {id:"outside",title:"円の外",inside:[],outside:["S","P"],point:{x:310,y:330}},
      {id:"intersection",title:"共通部分（S∩P＝S）",inside:["S","P"],outside:[],point:{x:310,y:180}},
      {id:"p-only",title:"Pのみ（P∖S）",inside:["P"],outside:["S"],point:{x:310,y:265}}
    ]
  },
  "predicate-inside-subject": {
    title:"PがSに含まれる", viewBox:"0 0 620 330",
    circles:[
      {id:"S",cx:310,cy:180,r:132,label:{x:215,y:105}},
      {id:"P",cx:350,cy:180,r:68,label:{x:350,y:180}}
    ],
    regions:[
      {id:"outside",title:"円の外",inside:[],outside:["S","P"],point:{x:310,y:330}},
      {id:"s-only",title:"Sのみ（S∖P）",inside:["S"],outside:["P"],point:{x:225,y:180}},
      {id:"intersection",title:"共通部分（S∩P＝P）",inside:["S","P"],outside:[],point:{x:350,y:180}}
    ]
  },
  disjoint: {
    title:"SとPが交わらない", viewBox:"0 0 620 330",
    circles:[
      {id:"S",cx:185,cy:180,r:82,label:{x:185,y:180}},
      {id:"P",cx:435,cy:180,r:82,label:{x:435,y:180}}
    ],
    regions:[
      {id:"outside",title:"円の外",inside:[],outside:["S","P"],point:{x:310,y:180}},
      {id:"s-only",title:"Sのみ（S∖P）",inside:["S"],outside:["P"],point:{x:185,y:180}},
      {id:"p-only",title:"Pのみ（P∖S）",inside:["P"],outside:["S"],point:{x:435,y:180}}
    ]
  },
  equal: {
    title:"SとPが同じ", viewBox:"0 0 620 330",
    circles:[
      {id:"S",cx:310,cy:180,r:108,label:{x:310,y:180}},
      {id:"P",cx:310,cy:180,r:108,label:{x:310,y:180}}
    ],
    regions:[
      {id:"outside",title:"円の外",inside:[],outside:["S","P"],point:{x:310,y:315}},
      {id:"intersection",title:"共通部分（S∩P＝S＝P）",inside:["S","P"],outside:[],point:{x:310,y:180}}
    ]
  },
  "three-term": {
    title:"S・M・Pの標準配置", viewBox:"0 0 620 400",
    circles:[
      {id:"S",cx:250,cy:165,r:110,label:{x:205,y:90}},
      {id:"M",cx:370,cy:165,r:110,label:{x:415,y:90}},
      {id:"P",cx:310,cy:270,r:110,label:{x:310,y:360}}
    ],
    regions:[
      {id:"outside",title:"円の外",inside:[],outside:["S","M","P"],point:{x:310,y:25}},
      {id:"s-only",title:"Sのみ",inside:["S"],outside:["M","P"],point:{x:190,y:165}},
      {id:"m-only",title:"Mのみ",inside:["M"],outside:["S","P"],point:{x:430,y:165}},
      {id:"p-only",title:"Pのみ",inside:["P"],outside:["S","M"],point:{x:310,y:355}},
      {id:"s-m",title:"S∩M（Pを除く）",inside:["S","M"],outside:["P"],point:{x:310,y:80}},
      {id:"s-p",title:"S∩P（Mを除く）",inside:["S","P"],outside:["M"],point:{x:235,y:240}},
      {id:"m-p",title:"M∩P（Sを除く）",inside:["M","P"],outside:["S"],point:{x:385,y:240}},
      {id:"s-m-p",title:"S∩M∩P",inside:["S","M","P"],outside:[],point:{x:310,y:180}}
    ]
  }
};

const eulerStorageKey = "logic-visual-dictionary.euler-diagrams.v1";
let eulerDiagrams = [];
let activeEulerDiagramId = null;
let eulerPointMode = "none";
let eulerStorageError = "";
let eulerViewingMode = true;

function getActiveEulerDiagram() {
  return eulerDiagrams.find(diagram => diagram.id === activeEulerDiagramId) || null;
}

function getEulerState(diagram, layoutId) {
  if (!diagram.states.has(layoutId)) {
    const labels = Object.fromEntries(["S","M","P"].map(term => {
      const circle = eulerLayouts[layoutId].circles.find(item => item.id === term);
      return [term,circle ? {...circle.label} : null];
    }));
    diagram.states.set(layoutId, {shaded:new Set(),markers:[],labels});
  }
  const state = diagram.states.get(layoutId);
  if (!state.labels) state.labels = Object.fromEntries(["S","M","P"].map(term => {
    const circle = eulerLayouts[layoutId].circles.find(item => item.id === term);
    return [term,circle ? {...circle.label} : null];
  }));
  return state;
}

function serializeEulerDiagram(diagram) {
  return {
    id:diagram.id,
    name:diagram.name,
    sentence:diagram.sentence,
    description:diagram.description,
    layoutId:diagram.layoutId,
    states:Object.fromEntries([...diagram.states].map(([layoutId,state]) => [
      layoutId,
      {
        shaded:[...state.shaded],
        markers:state.markers.map(point => ({x:point.x,y:point.y})),
        labels:state.labels
      }
    ]))
  };
}

function parseEulerDiagram(value) {
  if (!value || typeof value !== "object" || Array.isArray(value) ||
      typeof value.id !== "string" || typeof value.name !== "string" ||
      !value.name.trim() || value.name.trim().length > 80 ||
      !Object.prototype.hasOwnProperty.call(eulerLayouts, value.layoutId) ||
      !value.states || typeof value.states !== "object" || Array.isArray(value.states)) {
    throw new Error("図データの形式が正しくありません。");
  }
  const states = new Map();
  for (const [layoutId, rawState] of Object.entries(value.states)) {
    const layout = eulerLayouts[layoutId];
    if (!layout || !rawState || typeof rawState !== "object" ||
        !Array.isArray(rawState.shaded) || !Array.isArray(rawState.markers) ||
        (rawState.labels !== undefined &&
          (!rawState.labels || typeof rawState.labels !== "object" || Array.isArray(rawState.labels)))) {
      throw new Error("保存データに不明な図形または領域があります。");
    }
    const validRegionIds = new Set(layout.regions.map(region => region.id));
    if (rawState.shaded.some(id => typeof id !== "string" || !validRegionIds.has(id)) ||
        rawState.markers.some(point =>
          !point || !Number.isFinite(point.x) || !Number.isFinite(point.y) ||
          point.x < 0 || point.x > Number(layout.viewBox.split(" ")[2]) ||
          point.y < 0 || point.y > Number(layout.viewBox.split(" ")[3]))) {
      throw new Error("保存データに不正な染色領域または×の位置があります。");
    }
    const defaults = Object.fromEntries(["S","M","P"].map(term => {
      const circle = layout.circles.find(item => item.id === term);
      return [term,circle ? {...circle.label} : null];
    }));
    const labels = {...defaults};
    if (rawState.labels) {
      for (const [term, point] of Object.entries(rawState.labels)) {
        if (!["S","M","P"].includes(term) ||
            (point !== null && (!point || !Number.isFinite(point.x) || !Number.isFinite(point.y) ||
              point.x < 0 || point.x > Number(layout.viewBox.split(" ")[2]) ||
              point.y < 0 || point.y > Number(layout.viewBox.split(" ")[3])))) {
          throw new Error("保存データに不正なS・M・Pの位置があります。");
        }
        labels[term] = point === null ? null : {x:point.x,y:point.y};
      }
    }
    const state = {
      shaded:new Set(rawState.shaded),
      markers:rawState.markers.map(point => ({x:point.x,y:point.y})),
      labels
    };
    states.set(layoutId, state);
  }
  return {
    id:value.id,
    name:value.name.trim(),
    sentence:typeof value.sentence === "string" ? value.sentence.slice(0,500) : "",
    description:typeof value.description === "string" ? value.description.slice(0,2000) : "",
    layoutId:value.layoutId,
    states
  };
}

function setEulerStatus(message) {
  document.getElementById("euler-status").textContent = message;
}

function readEulerDiagrams() {
  try {
    const raw = localStorage.getItem(eulerStorageKey);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved || saved.version !== 1 || !Array.isArray(saved.diagrams)) {
      throw new Error("保存データの形式またはバージョンが正しくありません。");
    }
    eulerDiagrams = saved.diagrams.map(parseEulerDiagram);
    const names = new Set();
    const ids = new Set();
    for (const diagram of eulerDiagrams) {
      const key = diagram.name.toLocaleLowerCase("ja-JP");
      if (names.has(key) || ids.has(diagram.id)) {
        throw new Error("同じ名前またはIDの図が重複しています。保存データをJSONに書き出して確認してください。");
      }
      names.add(key);
      ids.add(diagram.id);
    }
    if (eulerDiagrams.some(diagram => diagram.id === saved.activeId)) {
      activeEulerDiagramId = saved.activeId;
    } else if (eulerDiagrams.length) {
      activeEulerDiagramId = eulerDiagrams[0].id;
    }
  } catch (error) {
    eulerDiagrams = [];
    activeEulerDiagramId = null;
    eulerStorageError = `保存データを読み込めませんでした。${error.message || error}`;
  }
}

function persistEulerDiagrams() {
  try {
    localStorage.setItem(eulerStorageKey, JSON.stringify({
      version:1,
      activeId:activeEulerDiagramId,
      diagrams:eulerDiagrams.map(serializeEulerDiagram)
    }));
    eulerStorageError = "";
    return true;
  } catch (error) {
    eulerStorageError = `ブラウザーへの保存に失敗しました。空き容量や保存設定を確認してください。${error.message || error}`;
    return false;
  }
}

function renderEulerSavedList() {
  const selector = document.getElementById("euler-saved-list");
  selector.replaceChildren();
  if (!eulerDiagrams.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "保存した図はありません";
    selector.append(option);
  } else {
    eulerDiagrams.forEach(diagram => {
      const option = document.createElement("option");
      option.value = diagram.id;
      option.textContent = diagram.name;
      selector.append(option);
    });
  }
  selector.value = activeEulerDiagramId || "";
  document.getElementById("euler-delete").disabled = !activeEulerDiagramId;
  document.getElementById("euler-export").disabled = eulerDiagrams.length === 0;
}

function snapPointToBoundary(layout, point) {
  const intersections = [];
  for (let first = 0; first < layout.circles.length; first += 1) {
    for (let second = first + 1; second < layout.circles.length; second += 1) {
      const a = layout.circles[first];
      const b = layout.circles[second];
      const dx = b.cx - a.cx;
      const dy = b.cy - a.cy;
      const distance = Math.hypot(dx, dy);
      if (!distance || distance > a.r + b.r || distance < Math.abs(a.r - b.r)) continue;
      const along = (a.r ** 2 - b.r ** 2 + distance ** 2) / (2 * distance);
      const height = Math.sqrt(Math.max(0, a.r ** 2 - along ** 2));
      const baseX = a.cx + along * dx / distance;
      const baseY = a.cy + along * dy / distance;
      intersections.push(
        {x:baseX - height * dy / distance,y:baseY + height * dx / distance},
        {x:baseX + height * dy / distance,y:baseY - height * dx / distance}
      );
    }
  }
  const nearestIntersection = intersections
    .map(candidate => ({candidate,distance:Math.hypot(point.x-candidate.x,point.y-candidate.y)}))
    .filter(item => item.distance <= 8)
    .sort((a,b) => a.distance-b.distance)[0];
  if (nearestIntersection) return nearestIntersection.candidate;
  const nearest = layout.circles.map(circle => ({
    circle,
    distance:Math.hypot(point.x - circle.cx, point.y - circle.cy)
  })).filter(item => Math.abs(item.distance - item.circle.r) <= 8)
    .sort((a,b) => Math.abs(a.distance - a.circle.r) - Math.abs(b.distance - b.circle.r))[0];
  if (!nearest || nearest.distance === 0) return point;
  const scale = nearest.circle.r / nearest.distance;
  return {
    x:nearest.circle.cx + (point.x - nearest.circle.cx) * scale,
    y:nearest.circle.cy + (point.y - nearest.circle.cy) * scale
  };
}

function regionAtPoint(layout, point) {
  const memberships = new Set(layout.circles.filter(circle =>
    Math.hypot(point.x - circle.cx, point.y - circle.cy) <= circle.r
  ).map(circle => circle.id));
  return layout.regions.find(region =>
    region.inside.every(id => memberships.has(id)) &&
    region.outside.every(id => !memberships.has(id))
  ) || null;
}

function renderEulerEditor(layoutId) {
  const diagram = getActiveEulerDiagram();
  const svg = document.getElementById("euler-diagram");
  if (!svg) return;
  if (!diagram) {
    document.querySelector(".chapter").classList.toggle("euler-viewing-mode", eulerViewingMode);
    svg.setAttribute("viewBox", "0 0 620 330");
    svg.setAttribute("aria-label", "名前を付けて図を作成すると編集できます");
    svg.innerHTML = "";
    document.getElementById("euler-layout").disabled = true;
    document.getElementById("euler-reset").disabled = true;
    document.getElementById("euler-shade-mode").disabled = true;
    document.getElementById("euler-place-mode").disabled = true;
    document.getElementById("euler-remove-mode").disabled = true;
    document.querySelectorAll("[data-euler-term-mode]").forEach(button => { button.disabled = true; });
    document.getElementById("euler-mode-toggle").disabled = false;
    document.getElementById("euler-mode-toggle").textContent = eulerViewingMode ? "編集" : "閲覧";
    document.getElementById("euler-view-title").textContent = "";
    document.getElementById("euler-example-view").textContent = "";
    document.getElementById("euler-current-name").disabled = true;
    document.getElementById("euler-current-sentence").value = "";
    document.getElementById("euler-current-sentence").disabled = true;
    document.getElementById("euler-current-description").value = "";
    document.getElementById("euler-current-description").disabled = true;
    document.getElementById("euler-description-view").hidden = true;
    setEulerStatus(eulerStorageError || "編集する図を作成してください。作成した図はこのブラウザーに自動保存されます。");
    renderEulerSavedList();
    return;
  }
  const selectedLayoutId = layoutId || diagram.layoutId;
  const layout = eulerLayouts[selectedLayoutId];
  if (!layout) throw new Error(`Unknown Euler layout: ${selectedLayoutId}`);
  diagram.layoutId = selectedLayoutId;
  const state = getEulerState(diagram, selectedLayoutId);
  document.getElementById("euler-layout").disabled = false;
  document.getElementById("euler-reset").disabled = false;
  document.getElementById("euler-shade-mode").disabled = false;
  document.getElementById("euler-place-mode").disabled = false;
  document.getElementById("euler-remove-mode").disabled = false;
  document.querySelectorAll("[data-euler-term-mode]").forEach(button => { button.disabled = false; });
  document.getElementById("euler-mode-toggle").disabled = false;
  document.getElementById("euler-current-name").disabled = false;
  document.getElementById("euler-current-sentence").disabled = false;
  document.getElementById("euler-current-description").disabled = false;
  document.getElementById("euler-view-title").textContent = diagram.name;
  document.getElementById("euler-current-name").value = diagram.name;
  document.getElementById("euler-example-view").textContent = diagram.sentence;
  document.getElementById("euler-example-view").hidden = !diagram.sentence;
  document.getElementById("euler-current-sentence").value = diagram.sentence;
  document.getElementById("euler-current-description").value = diagram.description;
  document.getElementById("euler-description-text").textContent = diagram.description;
  document.getElementById("euler-description-view").hidden = !diagram.description.trim();
  document.getElementById("euler-layout").value = selectedLayoutId;
  document.getElementById("euler-saved-list").value = diagram.id;
  const [,,width,height] = layout.viewBox.split(" ").map(Number);
  const circleMasks = layout.circles.map(circle =>
    `<mask id="euler-circle-${selectedLayoutId}-${circle.id}" maskUnits="userSpaceOnUse" x="0" y="0" width="${width}" height="${height}"><circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="white"/></mask>`
  );
  const masks = [...circleMasks];
  const shading = layout.regions.filter(region => region.inside.length && state.shaded.has(region.id)).map(region => {
    const maskId = `euler-shade-${selectedLayoutId}-${region.id}`;
    const included = region.inside.reduce((content, id) =>
      `<g mask="url(#euler-circle-${selectedLayoutId}-${id})">${content}</g>`,
    `<rect width="${width}" height="${height}" fill="white"/>`);
    const excluded = region.outside.map(id => {
      const circle = layout.circles.find(item => item.id === id);
      return `<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}" fill="black"/>`;
    }).join("");
    masks.push(`<mask id="${maskId}" maskUnits="userSpaceOnUse" x="0" y="0" width="${width}" height="${height}">${included}${excluded}</mask>`);
    return `<rect class="euler-highlight" width="${width}" height="${height}" mask="url(#${maskId})"/>`;
  }).join("");
  const outlines = layout.circles.map(circle =>
    `<circle class="euler-boundary" cx="${circle.cx}" cy="${circle.cy}" r="${circle.r}"/>`
  ).join("");
  const labels = ["S","M","P"].filter(term => state.labels[term]).map(term =>
    `<text class="euler-term-label" data-term-label="${term}" x="${state.labels[term].x}" y="${state.labels[term].y}">${term}</text>`
  ).join("");
  const markers = state.markers.map((point,index) =>
    `<text class="euler-existence" data-marker-index="${index}" x="${point.x}" y="${point.y}" aria-label="存在を表す×">×</text>`
  ).join("");
  svg.setAttribute("viewBox", layout.viewBox);
  svg.setAttribute("aria-label", `${layout.title}の集合図`);
  svg.innerHTML = `<defs>${masks.join("")}</defs>${shading}${outlines}${labels}${markers}`;

  const shadedCount = [...state.shaded].filter(id =>
    layout.regions.some(region => region.id === id && region.inside.length)
  ).length;
  const markerCount = state.markers.length;
  setEulerStatus(eulerStorageError || `${diagram.name} — ${layout.title}：塗り ${shadedCount}、× ${markerCount}。自動保存`);
  document.getElementById("euler-reset").disabled = shadedCount === 0 && markerCount === 0 &&
    Object.entries(state.labels).every(([term,point]) => {
      const circle = layout.circles.find(item => item.id === term);
      return JSON.stringify(point) === JSON.stringify(circle ? circle.label : null);
    });
  document.getElementById("euler-place-mode").setAttribute("aria-pressed", String(eulerPointMode === "place"));
  document.getElementById("euler-remove-mode").setAttribute("aria-pressed", String(eulerPointMode === "remove"));
  document.getElementById("euler-shade-mode").setAttribute("aria-pressed", String(eulerPointMode === "shade"));
  document.querySelectorAll("[data-euler-term-mode]").forEach(button => {
    button.setAttribute("aria-pressed", String(eulerPointMode === button.dataset.eulerTermMode));
  });
  document.getElementById("euler-mode-toggle").textContent = eulerViewingMode ? "編集" : "閲覧";
  document.querySelector(".chapter").classList.toggle("euler-viewing-mode", eulerViewingMode);
  svg.classList.toggle("euler-place-active", ["place","S","M","P"].includes(eulerPointMode));
  svg.classList.toggle("euler-remove-active", eulerPointMode === "remove");
  svg.classList.toggle("euler-shade-active", eulerPointMode === "shade");
  svg.classList.toggle("euler-term-active", ["S","M","P"].includes(eulerPointMode));
  renderEulerSavedList();
}

function addEulerMarker(point) {
  const diagram = getActiveEulerDiagram();
  if (!diagram) return;
  const layout = eulerLayouts[diagram.layoutId];
  const state = getEulerState(diagram, diagram.layoutId);
  const placedPoint = snapPointToBoundary(layout, point);
  state.markers.push({x:placedPoint.x,y:placedPoint.y});
  persistEulerDiagrams();
  renderEulerEditor(diagram.layoutId);
}

function toggleEulerShade(point) {
  const diagram = getActiveEulerDiagram();
  if (!diagram) return;
  const layout = eulerLayouts[diagram.layoutId];
  const state = getEulerState(diagram, diagram.layoutId);
  const region = regionAtPoint(layout, point);
  if (!region || !region.inside.length) {
    setEulerStatus("円の内側をクリックしてください。");
    return;
  }
  if (state.shaded.has(region.id)) state.shaded.delete(region.id);
  else state.shaded.add(region.id);
  persistEulerDiagrams();
  renderEulerEditor(diagram.layoutId);
}

function removeNearestEulerMarker(point) {
  const diagram = getActiveEulerDiagram();
  if (!diagram) return;
  const state = getEulerState(diagram, diagram.layoutId);
  let nearest = null;
  let nearestDistance = 24;
  state.markers.forEach((marker,index) => {
    const distance = Math.hypot(marker.x - point.x, marker.y - point.y);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = {type:"x",index};
    }
  });
  Object.entries(state.labels).forEach(([term,label]) => {
    if (!label) return;
    const distance = Math.hypot(label.x - point.x, label.y - point.y);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = {type:"term",term};
    }
  });
  if (!nearest) {
    setEulerStatus("近くに印がありません。");
    return;
  }
  if (nearest.type === "x") state.markers.splice(nearest.index, 1);
  else state.labels[nearest.term] = null;
  persistEulerDiagrams();
  renderEulerEditor(diagram.layoutId);
}

function placeEulerTerm(term, point) {
  const diagram = getActiveEulerDiagram();
  if (!diagram) return;
  const state = getEulerState(diagram, diagram.layoutId);
  state.labels[term] = {x:point.x,y:point.y};
  persistEulerDiagrams();
  renderEulerEditor(diagram.layoutId);
}

function handleEulerDiagramClick(event) {
  if (eulerViewingMode) return;
  const svg = event.currentTarget;
  const svgPoint = svg.createSVGPoint();
  svgPoint.x = event.clientX;
  svgPoint.y = event.clientY;
  const point = svgPoint.matrixTransform(svg.getScreenCTM().inverse());
  if (eulerPointMode === "place") addEulerMarker(point);
  else if (eulerPointMode === "remove") removeNearestEulerMarker(point);
  else if (eulerPointMode === "shade") toggleEulerShade(point);
  else if (["S","M","P"].includes(eulerPointMode)) placeEulerTerm(eulerPointMode, point);
}

function setEulerPointMode(mode) {
  eulerPointMode = eulerPointMode === mode ? "none" : mode;
  renderEulerEditor(getActiveEulerDiagram()?.layoutId);
  const messages = {
    place:"×の位置をクリック",
    remove:"消す印をクリック",
    shade:"塗る領域をクリック",
    S:"Sの位置をクリック",
    M:"Mの位置をクリック",
    P:"Pの位置をクリック",
    none:"編集を終了"
  };
  setEulerStatus(messages[eulerPointMode]);
}

function createEulerDiagramId() {
  return `diagram-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
}

function createEulerDiagram() {
  const nameInput = document.getElementById("euler-new-name");
  const name = nameInput.value.trim();
  const layoutId = "overlap";
  if (!name) {
    setEulerStatus("図の名前を入力してください。");
    nameInput.focus();
    return;
  }
  if (eulerDiagrams.some(diagram => diagram.name.toLocaleLowerCase("ja-JP") === name.toLocaleLowerCase("ja-JP"))) {
    setEulerStatus("その名前は既に使われています。別の名前に変更してください。");
    nameInput.focus();
    nameInput.select();
    return;
  }
  const diagram = {id:createEulerDiagramId(),name,sentence:"",description:"",layoutId,states:new Map()};
  eulerDiagrams.push(diagram);
  activeEulerDiagramId = diagram.id;
  getEulerState(diagram, layoutId);
  if (!persistEulerDiagrams()) {
    eulerDiagrams = eulerDiagrams.filter(item => item.id !== diagram.id);
    activeEulerDiagramId = eulerDiagrams[0]?.id || null;
    renderEulerEditor(getActiveEulerDiagram()?.layoutId);
    return;
  }
  nameInput.value = "";
  renderEulerEditor(layoutId);
  setEulerStatus(`${name}を作成しました。`);
}

function exportEulerDiagrams() {
  if (!eulerDiagrams.length) {
    setEulerStatus("書き出す図がありません。");
    return;
  }
  try {
    const blob = new Blob([JSON.stringify({
      version:1,
      diagrams:eulerDiagrams.map(serializeEulerDiagram)
    }, null, 2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "logic-visual-dictionary-diagrams.json";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setEulerStatus(`${eulerDiagrams.length}件の図を書き出しました。JSONをGitHubに置けば、アプリのソースと一緒に保管できます。`);
  } catch (error) {
    setEulerStatus(`JSONの書き出しに失敗しました。${error.message || error}`);
  }
}

function importEulerDiagrams(file) {
  const reader = new FileReader();
  reader.addEventListener("error", () => setEulerStatus("ファイルを読み込めませんでした。"));
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (!imported || imported.version !== 1 || !Array.isArray(imported.diagrams)) {
        throw new Error("このアプリの保存JSON（version 1）ではありません。");
      }
      const diagrams = imported.diagrams.map(parseEulerDiagram);
      const names = new Set(eulerDiagrams.map(diagram => diagram.name.toLocaleLowerCase("ja-JP")));
      const ids = new Set(eulerDiagrams.map(diagram => diagram.id));
      for (const diagram of diagrams) {
        const key = diagram.name.toLocaleLowerCase("ja-JP");
        if (names.has(key) || ids.has(diagram.id)) {
          throw new Error(`「${diagram.name}」は既に存在します。重複しない名前のデータを読み込んでください。`);
        }
        names.add(key);
        ids.add(diagram.id);
      }
      const previousDiagrams = eulerDiagrams;
      const previousActiveId = activeEulerDiagramId;
      eulerDiagrams = [...eulerDiagrams,...diagrams];
      if (!activeEulerDiagramId && diagrams.length) activeEulerDiagramId = diagrams[0].id;
      if (!persistEulerDiagrams()) {
        eulerDiagrams = previousDiagrams;
        activeEulerDiagramId = previousActiveId;
        renderEulerEditor(getActiveEulerDiagram()?.layoutId);
        return;
      }
      renderEulerEditor(getActiveEulerDiagram()?.layoutId);
      setEulerStatus(`${diagrams.length}件の図を読み込み、ブラウザーに保存しました。`);
    } catch (error) {
      setEulerStatus(`読み込みに失敗しました。${error.message || error}`);
    }
  });
  reader.readAsText(file);
}

function showEulerTerm(termId) {
  const layoutForTerm = {A:"overlap",E:"disjoint",I:"overlap",O:"overlap",universal:"overlap",particular:"overlap",SaP:"subject-inside-predicate",SeP:"disjoint",SiP:"overlap",SoP:"overlap"};
  if (layoutForTerm[termId] && getActiveEulerDiagram()) {
    const diagram = getActiveEulerDiagram();
    diagram.layoutId = layoutForTerm[termId];
    persistEulerDiagrams();
    renderEulerEditor(diagram.layoutId);
  }
}

const relations = {
  contradiction: {text:"矛盾：AとO、EとIは、必ず一方が真で一方が偽になります。",nodes:["A","O","E","I"]},
  contrary: {text:"反対：AとEは両方が真になることはありませんが、両方が偽になることはあります。",nodes:["A","E"]},
  subcontrary: {text:"小反対：IとOは両方が偽になることはありませんが、両方が真になることはあります。",nodes:["I","O"]},
  subalternation: {text:"大小：伝統的対当論では、Aが真ならIも真、Eが真ならOも真です。",nodes:["A","I","E","O"]}
};

function updateRelation(relation) {
  const data = relations[relation];
  if (!data) return;
  document.querySelectorAll("[data-relation]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.relation === relation));
  });
  document.querySelectorAll("[data-relation-line]").forEach(line => {
    line.classList.toggle("is-active", line.dataset.relationLine === relation);
  });
  document.querySelectorAll(".aeio-node").forEach(node => {
    node.classList.toggle("is-active", data.nodes.includes(node.dataset.aeio));
  });
  const description = document.getElementById("relation-description");
  if (description) description.textContent = data.text;
}

const operations = {
  and: {symbol:"P ∧ Q",name:"連言",evaluate:(p,q)=>p&&q,text:"PとQの両方が真のときだけ、結果が真です。"},
  or: {symbol:"P ∨ Q",name:"選言",evaluate:(p,q)=>p||q,text:"PとQの少なくとも一方が真なら、結果が真です。"},
  implies: {symbol:"P → Q",name:"含意",evaluate:(p,q)=>!p||q,text:"Pが真でQが偽のときだけ、結果が偽です。"},
  iff: {symbol:"P ↔ Q",name:"同値",evaluate:(p,q)=>p===q,text:"PとQの真偽が一致するとき、結果が真です。"}
};
let selectedOperation = "and";

function updateOperation(name) {
  const definition = operations[name];
  if (!definition) return;
  selectedOperation = name;
  document.querySelectorAll("[data-operation]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.operation === name));
  });
  const heading = document.getElementById("truth-heading");
  const description = document.getElementById("truth-description");
  if (heading) heading.textContent = definition.symbol;
  if (description) description.textContent = `${definition.name}：${definition.text}`;
  document.querySelectorAll(".table-row").forEach(row => {
    const result = definition.evaluate(row.dataset.p === "true", row.dataset.q === "true");
    const cell = row.querySelector(".result");
    cell.textContent = result ? "真 (T)" : "偽 (F)";
    cell.classList.toggle("true", result);
    cell.classList.toggle("false", !result);
  });
}

function updateTableau(example) {
  const selected = example === "invalid" || example === "open" ? "invalid" : "valid";
  document.querySelectorAll("[data-tableau]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.tableau === selected));
  });
  document.querySelectorAll(".tableau-example").forEach(card => {
    card.classList.toggle("is-active", card.dataset.example === selected);
  });
  const status = document.getElementById("tableau-status");
  if (status) {
    status.textContent = selected === "valid"
      ? "選択中：すべての枝が閉じるため、推論は妥当です。"
      : "選択中：開いた枝が残り、反例があるため、推論は妥当ではありません。";
  }
}

function activateTerm(termId) {
  const term = terms.find(item => item.id === termId);
  if (!term) return;
  if (term.page !== currentPage) {
    window.location.href = `${pageUrl(term.page)}?term=${encodeURIComponent(termId)}`;
    return;
  }
  if (currentPage === "euler") showEulerTerm(termId);
  setActiveTerm(termId);
  if (relations[termId]) updateRelation(termId);
  if (operations[termId]) updateOperation(termId);
  if (["tableau","closed","open"].includes(termId)) updateTableau(termId);
  const popup = document.getElementById("dictionary-popup");
  if (popup) popup.textContent = term.message;
}

function setupEuler() {
  const selector = document.getElementById("euler-layout");
  if (!selector) return;
  readEulerDiagrams();
  selector.addEventListener("change", () => {
    const diagram = getActiveEulerDiagram();
    if (!diagram) return;
    diagram.layoutId = selector.value;
    getEulerState(diagram, selector.value);
    persistEulerDiagrams();
    renderEulerEditor(selector.value);
  });
  document.getElementById("euler-create").addEventListener("click", createEulerDiagram);
  document.getElementById("euler-new-name").addEventListener("keydown", event => {
    if (event.key === "Enter") createEulerDiagram();
  });
  document.getElementById("euler-current-sentence").addEventListener("input", event => {
    const diagram = getActiveEulerDiagram();
    if (!diagram) return;
    diagram.sentence = event.currentTarget.value;
    document.getElementById("euler-example-view").textContent = diagram.sentence;
    document.getElementById("euler-example-view").hidden = !diagram.sentence.trim();
    persistEulerDiagrams();
  });
  document.getElementById("euler-current-description").addEventListener("input", event => {
    const diagram = getActiveEulerDiagram();
    if (!diagram) return;
    diagram.description = event.currentTarget.value;
    document.getElementById("euler-description-text").textContent = diagram.description;
    document.getElementById("euler-description-view").hidden = !diagram.description.trim();
    persistEulerDiagrams();
  });
  document.getElementById("euler-current-name").addEventListener("change", event => {
    const diagram = getActiveEulerDiagram();
    if (!diagram) return;
    const name = event.currentTarget.value.trim();
    if (!name) {
      event.currentTarget.value = diagram.name;
      setEulerStatus("名前を入力してください。");
      return;
    }
    if (eulerDiagrams.some(item => item.id !== diagram.id &&
        item.name.toLocaleLowerCase("ja-JP") === name.toLocaleLowerCase("ja-JP"))) {
      event.currentTarget.value = diagram.name;
      setEulerStatus("同じ名前の図があります。");
      return;
    }
    diagram.name = name;
    persistEulerDiagrams();
    renderEulerEditor(diagram.layoutId);
  });
  document.getElementById("euler-saved-list").addEventListener("change", event => {
    activeEulerDiagramId = event.currentTarget.value || null;
    eulerPointMode = "none";
    persistEulerDiagrams();
    renderEulerEditor(getActiveEulerDiagram()?.layoutId);
  });
  document.getElementById("euler-delete").addEventListener("click", () => {
    const diagram = getActiveEulerDiagram();
    if (!diagram || !window.confirm(`「${diagram.name}」を削除しますか？`)) return;
    eulerDiagrams = eulerDiagrams.filter(item => item.id !== diagram.id);
    activeEulerDiagramId = eulerDiagrams[0]?.id || null;
    persistEulerDiagrams();
    renderEulerEditor(getActiveEulerDiagram()?.layoutId);
  });
  document.getElementById("euler-export").addEventListener("click", exportEulerDiagrams);
  document.getElementById("euler-import").addEventListener("change", event => {
    const file = event.currentTarget.files[0];
    if (file) importEulerDiagrams(file);
    event.currentTarget.value = "";
  });
  document.getElementById("euler-reset").addEventListener("click", () => {
    const diagram = getActiveEulerDiagram();
    if (!diagram) return;
    const state = getEulerState(diagram, diagram.layoutId);
    state.shaded.clear();
    state.markers = [];
    state.labels = Object.fromEntries(["S","M","P"].map(term => {
      const circle = eulerLayouts[diagram.layoutId].circles.find(item => item.id === term);
      return [term,circle ? {...circle.label} : null];
    }));
    persistEulerDiagrams();
    renderEulerEditor(diagram.layoutId);
  });
  document.getElementById("euler-shade-mode").addEventListener("click", () => setEulerPointMode("shade"));
  document.getElementById("euler-place-mode").addEventListener("click", () => setEulerPointMode("place"));
  document.getElementById("euler-remove-mode").addEventListener("click", () => setEulerPointMode("remove"));
  document.querySelectorAll("[data-euler-term-mode]").forEach(button => {
    button.addEventListener("click", () => setEulerPointMode(button.dataset.eulerTermMode));
  });
  document.getElementById("euler-mode-toggle").addEventListener("click", () => {
    eulerViewingMode = !eulerViewingMode;
    eulerPointMode = "none";
    renderEulerEditor(getActiveEulerDiagram()?.layoutId);
    setEulerStatus(eulerViewingMode ? "閲覧モード：図と例文を表示しています。" : "編集モードに戻りました。");
  });
  document.getElementById("euler-diagram").addEventListener("click", handleEulerDiagramClick);
  if (eulerDiagrams.length && !activeEulerDiagramId) activeEulerDiagramId = eulerDiagrams[0].id;
  renderEulerEditor(getActiveEulerDiagram()?.layoutId);
}

function setupOpposition() {
  document.querySelectorAll("[data-relation]").forEach(button => {
    button.addEventListener("click", () => {
      setActiveTerm(button.dataset.relation);
      updateRelation(button.dataset.relation);
      document.getElementById("dictionary-popup").textContent = terms.find(item => item.id === button.dataset.relation).message;
    });
  });
  document.querySelectorAll(".aeio-node").forEach(node => {
    const activate = () => {
      const form = node.dataset.aeio;
      setActiveTerm(form);
      updateRelation("contradiction");
      const pair = form === "A" || form === "O" ? ["A", "O"] : ["E", "I"];
      document.querySelectorAll(".aeio-node").forEach(item => {
        item.classList.toggle("is-active", pair.includes(item.dataset.aeio));
      });
      document.getElementById("dictionary-popup").textContent = terms.find(item => item.id === form).message;
    };
    node.addEventListener("click", activate);
    node.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
    });
  });
}

function setupTruthTable() {
  document.querySelectorAll("[data-operation]").forEach(button => {
    button.addEventListener("click", () => {
      setActiveTerm(button.dataset.operation);
      updateOperation(button.dataset.operation);
      document.getElementById("dictionary-popup").textContent = terms.find(item => item.id === button.dataset.operation).message;
    });
  });
  document.querySelectorAll(".table-row").forEach(row => {
    const activate = () => {
      const result = operations[selectedOperation].evaluate(row.dataset.p === "true", row.dataset.q === "true");
      document.querySelectorAll(".table-row").forEach(item => item.classList.toggle("is-active", item === row));
      document.getElementById("dictionary-popup").textContent =
        `P=${row.dataset.p === "true" ? "真" : "偽"}、Q=${row.dataset.q === "true" ? "真" : "偽"}のとき、${operations[selectedOperation].symbol} は${result ? "真" : "偽"}です。`;
    };
    row.addEventListener("click", activate);
    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
    });
  });
  updateOperation("and");
}

function setupTableau() {
  document.querySelectorAll("[data-tableau]").forEach(button => {
    button.addEventListener("click", () => {
      updateTableau(button.dataset.tableau);
      setActiveTerm(button.dataset.tableau === "invalid" ? "open" : "tableau");
      document.getElementById("dictionary-popup").textContent = terms.find(item => item.id === (button.dataset.tableau === "invalid" ? "open" : "tableau")).message;
    });
  });
  updateTableau("valid");
}

renderNavigation();
renderDictionary();
document.querySelectorAll("[data-dictionary-term]").forEach(card => {
  card.addEventListener("click", event => {
    event.preventDefault();
    activateTerm(card.dataset.dictionaryTerm);
  });
});
if (currentPage === "euler") setupEuler();
if (currentPage === "opposition") setupOpposition();
if (currentPage === "truth-table") setupTruthTable();
if (currentPage === "tableau") setupTableau();
const requestedTerm = new URLSearchParams(window.location.search).get("term");
if (requestedTerm) activateTerm(requestedTerm);
