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

const eulerPatterns = {
  "a-human-animal": {
    form:"A", subject:"人間", predicate:"動物", statement:"A-1：すべての人間は動物である",
    explanation:"主語「人間」のクラスが、述語「動物」のクラスに含まれる例です。染色は主語クラス全体を示します。",
    relation:"subject-inside-predicate", subjectCircle:{cx:310,cy:165,r:68}, predicateCircle:{cx:310,cy:165,r:132}
  },
  "a-equilateral-equiangular": {
    form:"A", subject:"等辺三角形", predicate:"等角三角形", statement:"A-2：すべての等辺三角形は等角三角形である",
    explanation:"この例ではユーザー指定の幾何学的な前提に基づき、主語と述語のクラスが同じ範囲として重なります。染色は共通のクラスです。",
    relation:"equal", subjectCircle:{cx:310,cy:165,r:105}, predicateCircle:{cx:310,cy:165,r:105}
  },
  "e-turtle-rabbit": {
    form:"E", subject:"カメ", predicate:"ウサギ", statement:"E：すべてのカメはウサギでない",
    explanation:"主語「カメ」と述語「ウサギ」のクラスが交わらない例です。主語クラスのうち、述語に当たらない部分を染色しています。",
    relation:"disjoint", subjectCircle:{cx:190,cy:165,r:82}, predicateCircle:{cx:430,cy:165,r:82}
  },
  "i-musician-genius": {
    form:"I", subject:"音楽家", predicate:"天才", statement:"I-1：ある音楽家は天才である",
    explanation:"音楽家と天才の共通部分に、少なくとも一つの対象がある例です。×はその存在を示します。",
    relation:"overlap", subjectCircle:{cx:250,cy:165,r:112}, predicateCircle:{cx:370,cy:165,r:112}, highlight:"intersection", existence:{x:310,y:165}
  },
  "i-student-female": {
    form:"I", subject:"学生", predicate:"女子学生", statement:"I-2：ある学生は女子学生である",
    explanation:"女子学生のクラスが学生のクラスに含まれる例です。共通部分に少なくとも一つの対象があることを×で示します。",
    relation:"predicate-inside-subject", subjectCircle:{cx:310,cy:165,r:132}, predicateCircle:{cx:350,cy:165,r:68}, highlight:"intersection", existence:{x:350,y:165}
  },
  "o-musician-genius": {
    form:"O", subject:"音楽家", predicate:"天才", statement:"O-1：ある音楽家は天才でない",
    explanation:"音楽家と天才の共通部分の外にある音楽家が少なくとも一人いる例です。×は主語クラスのうち述語に当たらない領域にあります。",
    relation:"overlap", subjectCircle:{cx:250,cy:165,r:112}, predicateCircle:{cx:370,cy:165,r:112}, highlight:"subject-only", existence:{x:208,y:165}
  },
  "o-student-female": {
    form:"O", subject:"学生", predicate:"女子学生", statement:"O-2：ある学生は女子学生でない",
    explanation:"女子学生のクラスが学生のクラスに含まれますが、女子学生でない学生も少なくとも一人いる例です。",
    relation:"predicate-inside-subject", subjectCircle:{cx:310,cy:165,r:132}, predicateCircle:{cx:350,cy:165,r:68}, highlight:"subject-only", existence:{x:235,y:165}
  }
};

const defaultEulerPattern = {A:"a-human-animal", E:"e-turtle-rabbit", I:"i-musician-genius", O:"o-musician-genius"};

function updateEulerPattern(patternId) {
  const pattern = eulerPatterns[patternId];
  if (!pattern) return;
  const svg = document.getElementById("euler-diagram");
  if (!svg) return;
  document.querySelectorAll("[data-euler-pattern]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.eulerPattern === patternId));
  });
  document.getElementById("euler-subject").textContent = pattern.subject;
  document.getElementById("euler-predicate").textContent = pattern.predicate;
  document.getElementById("euler-statement").textContent = pattern.statement;
  document.getElementById("euler-explanation").textContent = pattern.explanation;

  const s = pattern.subjectCircle;
  const p = pattern.predicateCircle;
  const subject = `<circle cx="${s.cx}" cy="${s.cy}" r="${s.r}"/>`;
  const predicate = `<circle cx="${p.cx}" cy="${p.cy}" r="${p.r}"/>`;
  const highlight = pattern.highlight === "intersection"
    ? `<defs><clipPath id="subject-clip">${subject}</clipPath></defs><g clip-path="url(#subject-clip)"><circle class="euler-highlight" cx="${p.cx}" cy="${p.cy}" r="${p.r}"/></g>`
    : pattern.highlight === "subject-only"
      ? `<defs><mask id="predicate-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="620" height="330"><rect width="620" height="330" fill="white"/>${predicate.replace("<circle", "<circle fill=\"black\"")}</mask></defs><circle class="euler-highlight" cx="${s.cx}" cy="${s.cy}" r="${s.r}" mask="url(#predicate-mask)"/>`
      : `<circle class="euler-highlight" cx="${s.cx}" cy="${s.cy}" r="${s.r}"/>`;
  const outline = pattern.relation === "equal"
    ? `<circle class="euler-boundary" cx="${s.cx}" cy="${s.cy}" r="${s.r}"/>`
    : `<circle class="euler-boundary" cx="${s.cx}" cy="${s.cy}" r="${s.r}"/><circle class="euler-boundary" cx="${p.cx}" cy="${p.cy}" r="${p.r}"/>`;
  const marker = pattern.existence
    ? `<text class="euler-existence" x="${pattern.existence.x}" y="${pattern.existence.y}" aria-label="この領域に要素が少なくとも1つある">×</text>`
    : "";
  svg.setAttribute("aria-label", `${pattern.statement}。${pattern.subject}が主語、${pattern.predicate}が述語です。`);
  svg.innerHTML = `${highlight}${outline}${marker}`;
  setActiveTerm(pattern.form);
  return pattern;
}

function showEulerTerm(termId) {
  const patternForTerm = {
    A:"a-human-animal",
    E:"e-turtle-rabbit",
    I:"i-musician-genius",
    O:"o-musician-genius",
    universal:"a-human-animal",
    particular:"i-musician-genius"
  };
  if (patternForTerm[termId]) updateEulerPattern(patternForTerm[termId]);
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
  document.querySelectorAll("[data-euler-pattern]").forEach(button => {
    button.addEventListener("click", () => {
      const pattern = updateEulerPattern(button.dataset.eulerPattern);
      document.getElementById("dictionary-popup").textContent =
        `${pattern.statement}。${pattern.subject}が主語、${pattern.predicate}が述語です。`;
    });
  });
  updateEulerPattern("a-human-animal");
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
