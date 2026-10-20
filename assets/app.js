const terms = [
  {id:"S",title:"主語項 S",description:"「何について述べるか」を表す項です。命題「すべてのSはPである」のSにあたります。",page:"euler",message:"主語項Sを選択しました。オイラー図でSの領域を確認できます。"},
  {id:"M",title:"媒概念 M",description:"三段論法の二つの前提をつなぐ項です。結論には現れません。",page:"euler",message:"媒概念Mを選択しました。三段論法の前提をつなぐ項です。"},
  {id:"P",title:"述語項 P",description:"主語項について何が述べられるかを表します。命題変数Pとは別の、項を表す記号です。",page:"euler",message:"述語項Pを選択しました。オイラー図でPの領域を確認できます。"},
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

function updateCategorical(form) {
  const forms = {
    A: ["A：すべてのSはPである", "全称肯定。Sに属するものはすべてPにも属します。Mは、二つの前提をつなぐ媒概念です。", "∅", "translate(138 145)"],
    E: ["E：どのSもPではない", "全称否定。SとPに共通するものはありません。Mは、二つの前提をつなぐ媒概念です。", "∅", "translate(270 145)"],
    I: ["I：あるSはPである", "特称肯定。少なくとも一つのSがPにも属します。Mは、二つの前提をつなぐ媒概念です。", "×", "translate(270 145)"],
    O: ["O：あるSはPではない", "特称否定。少なくとも一つのSがPには属しません。Mは、二つの前提をつなぐ媒概念です。", "×", "translate(138 145)"]
  };
  const formData = forms[form];
  if (!formData) return;
  document.querySelectorAll("[data-categorical]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.categorical === form));
  });
  const title = document.getElementById("categorical-title");
  const description = document.getElementById("categorical-description");
  const marker = document.getElementById("categorical-marker");
  if (title) title.textContent = formData[0];
  if (description) description.textContent = formData[1];
  if (marker) marker.setAttribute("transform", formData[3]);
  const markerText = document.getElementById("categorical-marker-text");
  if (markerText) markerText.textContent = formData[2];
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
  setActiveTerm(termId);
  if (["A","E","I","O"].includes(termId)) updateCategorical(termId);
  if (relations[termId]) updateRelation(termId);
  if (operations[termId]) updateOperation(termId);
  if (["tableau","closed","open"].includes(termId)) updateTableau(termId);
  const popup = document.getElementById("dictionary-popup");
  if (popup) popup.textContent = term.message;
}

function setupEuler() {
  document.querySelectorAll("[data-categorical]").forEach(button => {
    button.addEventListener("click", () => {
      const term = button.dataset.categorical;
      setActiveTerm(term);
      updateCategorical(term);
      document.getElementById("dictionary-popup").textContent = terms.find(item => item.id === term).message;
    });
  });
  document.querySelectorAll("[data-term-node]").forEach(node => {
    node.addEventListener("click", () => activateTerm(node.dataset.termNode));
    node.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activateTerm(node.dataset.termNode); }
    });
  });
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
