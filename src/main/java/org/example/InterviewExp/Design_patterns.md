## 🚀 What Are Design Patterns?

👉 Reusable solutions to common software design problems
👉 Not code — **approaches / templates

# 🔥 3 Main Categories (Must Know)

## 1️⃣ Creational Patterns (Object Creation)

# 2️⃣ Structural Patterns (Class/Object Structure)

# 3️⃣ Behavioral Patterns (Communication)

# 1 creational

### ✅ Singleton (MOST ASKED)

<pre class="overflow-visible! px-0!" data-start="437" data-end="640"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">Singleton</span><span> {</span><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">final</span><span> </span><span class="ͼe">Singleton</span><span> </span><span class="ͼe">instance</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">Singleton</span><span>();</span><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">Singleton</span><span>() {}</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼe">Singleton</span><span> </span><span class="ͼe">getInstance</span><span>() {</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼe">instance</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔ Use: Logging, Config, Cache
✔ Only **one instance**

---

### ✅ Factory Pattern

<pre class="overflow-visible! px-0!" data-start="727" data-end="1022"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">interface</span><span> </span><span class="ͼe">Shape</span><span> {</span><br/><span>    </span><span class="ͼ8">void</span><span> </span><span class="ͼe">draw</span><span>();</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">Circle</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">Shape</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">draw</span><span>() { </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Circle"</span><span>); }</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">ShapeFactory</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼe">Shape</span><span> </span><span class="ͼe">getShape</span><span>(</span><span class="ͼe">String</span><span> </span><span class="ͼe">type</span><span>) {</span><br/><span>        </span><span class="ͼ8">if</span><span> (</span><span class="ͼe">type</span><span class="ͼ8">.</span><span class="ͼe">equals</span><span>(</span><span class="ͼc">"circle"</span><span>)) </span><span class="ͼ8">return</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">Circle</span><span>();</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼb">null</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔ Use: When object creation logic is complex

---

### ✅ Builder Pattern

<pre class="overflow-visible! px-0!" data-start="1098" data-end="1647"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">User</span><span> {</span><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">String</span><span> </span><span class="ͼe">name</span><span>;</span><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">int</span><span> </span><span class="ͼe">age</span><span>;</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">Builder</span><span> {</span><br/><span>        </span><span class="ͼ8">private</span><span> </span><span class="ͼe">String</span><span> </span><span class="ͼe">name</span><span>;</span><br/><span>        </span><span class="ͼ8">private</span><span> </span><span class="ͼe">int</span><span> </span><span class="ͼe">age</span><span>;</span><br/><br/><span>        </span><span class="ͼ8">public</span><span> </span><span class="ͼe">Builder</span><span> </span><span class="ͼe">setName</span><span>(</span><span class="ͼe">String</span><span> </span><span class="ͼe">name</span><span>) {</span><br/><span>            </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">name</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">name</span><span>;</span><br/><span>            </span><span class="ͼ8">return</span><span> </span><span class="ͼb">this</span><span>;</span><br/><span>        }</span><br/><br/><span>        </span><span class="ͼ8">public</span><span> </span><span class="ͼe">Builder</span><span> </span><span class="ͼe">setAge</span><span>(</span><span class="ͼe">int</span><span> </span><span class="ͼe">age</span><span>) {</span><br/><span>            </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">age</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">age</span><span>;</span><br/><span>            </span><span class="ͼ8">return</span><span> </span><span class="ͼb">this</span><span>;</span><br/><span>        }</span><br/><br/><span>        </span><span class="ͼ8">public</span><span> </span><span class="ͼe">User</span><span> </span><span class="ͼe">build</span><span>() {</span><br/><span>            </span><span class="ͼe">User</span><span> </span><span class="ͼe">u</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">User</span><span>();</span><br/><span>            </span><span class="ͼe">u</span><span class="ͼ8">.</span><span class="ͼe">name</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">name</span><span>;</span><br/><span>            </span><span class="ͼe">u</span><span class="ͼ8">.</span><span class="ͼe">age</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">age</span><span>;</span><br/><span>            </span><span class="ͼ8">return</span><span> </span><span class="ͼe">u</span><span>;</span><br/><span>        }</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔ Use: Complex objects with many fields

# 2 Structural Patterns

👉 Focus: *How classes are organized*

---

### ✅ Adapter Pattern

<pre class="overflow-visible! px-0!" data-start="1815" data-end="2103"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">interface</span><span> </span><span class="ͼe">MediaPlayer</span><span> {</span><br/><span>    </span><span class="ͼ8">void</span><span> </span><span class="ͼe">play</span><span>(</span><span class="ͼe">String</span><span> </span><span class="ͼe">file</span><span>);</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">OldPlayer</span><span> {</span><br/><span>    </span><span class="ͼ8">void</span><span> </span><span class="ͼe">playOld</span><span>(</span><span class="ͼe">String</span><span> </span><span class="ͼe">file</span><span>) {}</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">Adapter</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">MediaPlayer</span><span> {</span><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">OldPlayer</span><span> </span><span class="ͼe">oldPlayer</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">OldPlayer</span><span>();</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">play</span><span>(</span><span class="ͼe">String</span><span> </span><span class="ͼe">file</span><span>) {</span><br/><span>        </span><span class="ͼe">oldPlayer</span><span class="ͼ8">.</span><span class="ͼe">playOld</span><span>(</span><span class="ͼe">file</span><span>);</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔ Use: Make incompatible interfaces work together

---

### ✅ Decorator Pattern

<pre class="overflow-visible! px-0!" data-start="2186" data-end="2608"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">interface</span><span> </span><span class="ͼe">Coffee</span><span> {</span><br/><span>    </span><span class="ͼe">String</span><span> </span><span class="ͼe">getDescription</span><span>();</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">SimpleCoffee</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">Coffee</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼe">String</span><span> </span><span class="ͼe">getDescription</span><span>() {</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼc">"Simple Coffee"</span><span>;</span><br/><span>    }</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">MilkDecorator</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">Coffee</span><span> {</span><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">Coffee</span><span> </span><span class="ͼe">coffee</span><span>;</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼe">MilkDecorator</span><span>(</span><span class="ͼe">Coffee</span><span> </span><span class="ͼe">coffee</span><span>) {</span><br/><span>        </span><span class="ͼb">this</span><span class="ͼ8">.</span><span class="ͼe">coffee</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼe">coffee</span><span>;</span><br/><span>    }</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼe">String</span><span> </span><span class="ͼe">getDescription</span><span>() {</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼe">coffee</span><span class="ͼ8">.</span><span class="ͼe">getDescription</span><span>() </span><span class="ͼ8">+</span><span> </span><span class="ͼc">", Milk"</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔ Use: Add features dynamically

# 3️⃣ Behavioral Patterns (Communication)

👉 Focus: *How objects interact*

---

### ✅ Strategy Pattern (VERY IMPORTANT)

<pre class="overflow-visible! px-0!" data-start="2772" data-end="3067"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">interface</span><span> </span><span class="ͼe">PaymentStrategy</span><span> {</span><br/><span>    </span><span class="ͼ8">void</span><span> </span><span class="ͼe">pay</span><span>();</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">CreditCard</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">PaymentStrategy</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">pay</span><span>() {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Paid by card"</span><span>);</span><br/><span>    }</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">UPI</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">PaymentStrategy</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">pay</span><span>() {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Paid by UPI"</span><span>);</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔ Use: Switch behavior at runtime

---

### ✅ Observer Pattern

<pre class="overflow-visible! px-0!" data-start="3133" data-end="3295"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">interface</span><span> </span><span class="ͼe">Observer</span><span> {</span><br/><span>    </span><span class="ͼ8">void</span><span> </span><span class="ͼe">update</span><span>();</span><br/><span>}</span><br/><br/><span class="ͼ8">class</span><span> </span><span class="ͼe">User</span><span> </span><span class="ͼ8">implements</span><span> </span><span class="ͼe">Observer</span><span> {</span><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">void</span><span> </span><span class="ͼe">update</span><span>() {</span><br/><span>        </span><span class="ͼe">System</span><span class="ͼ8">.</span><span class="ͼe">out</span><span class="ͼ8">.</span><span class="ͼe">println</span><span>(</span><span class="ͼc">"Notified"</span><span>);</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

✔ Use: Event systems (like notifications)

# 🔥 MOST ASKED IN INTERVIEWS


| Pattern   | Importance |
| --------- | ---------- |
| Singleton | ⭐⭐⭐⭐⭐ |
| Factory   | ⭐⭐⭐⭐⭐ |
| Builder   | ⭐⭐⭐⭐   |
| Strategy  | ⭐⭐⭐⭐⭐ |
| Observer  | ⭐⭐⭐⭐   |
| Decorator | ⭐⭐⭐     |

# 🚀 Real-world Mapping (Spring Boot)



| Pattern   | Where Used                      |
| --------- | ------------------------------- |
| Singleton | Spring Beans                    |
| Factory   | BeanFactory, ApplicationContext |
| Proxy     | Spring AOP                      |
| Observer  | Event Listeners                 |
| Builder   | Lombok @Builder<br />#         |



# 🚀 Real-world Mapping (Spring Boot)



| Pattern   | Where Used                      |
| --------- | ------------------------------- |
| Singleton | Spring Beans                    |
| Factory   | BeanFactory, ApplicationContext |
| Proxy     | Spring AOP                      |
| Observer  | Event Listeners                 |
| Builder   | Lombok @Builder                 |





# Eager & Lazy


You’re asking about **Eager vs Lazy initialization design patterns in Java** — this is mainly used in the context of the **Singleton Design Pattern**.

Let’s break it down clearly 👇

---

# ✅ Where Eager & Lazy Are Used

👉 They are used in:

> **Singleton Design Pattern**

👉 Goal:

* Ensure **only one instance** of a class exists

---

# 🔥 1️⃣ Eager Initialization (Created Immediately)

## ✔ Definition

Object is created **at class loading time**

---

## ✅ Example

<pre class="overflow-visible! px-0!" data-start="472" data-end="703"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">EagerSingleton</span><span> {</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">final</span><span> </span><span class="ͼe">EagerSingleton</span><span> </span><span class="ͼe">instance</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">EagerSingleton</span><span>();</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">EagerSingleton</span><span>() {}</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼe">EagerSingleton</span><span> </span><span class="ͼe">getInstance</span><span>() {</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼe">instance</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## ✅ When to Use

✔ When:

* Object is **lightweight**
* Always needed
* No performance concern

---

## ❌ Drawbacks

* Memory used even if not needed
* No lazy loading

---

# 🔥 2️⃣ Lazy Initialization (Created When Needed)

## ✔ Definition

Object is created **only when requested**

---

## ✅ Example

<pre class="overflow-visible! px-0!" data-start="1014" data-end="1298"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">LazySingleton</span><span> {</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼe">LazySingleton</span><span> </span><span class="ͼe">instance</span><span>;</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">LazySingleton</span><span>() {}</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼe">LazySingleton</span><span> </span><span class="ͼe">getInstance</span><span>() {</span><br/><span>        </span><span class="ͼ8">if</span><span> (</span><span class="ͼe">instance</span><span> </span><span class="ͼ8">==</span><span> </span><span class="ͼb">null</span><span>) {</span><br/><span>            </span><span class="ͼe">instance</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">LazySingleton</span><span>();</span><br/><span>        }</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼe">instance</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## ❌ Problem

👉 Not thread-safe ❌

---

# 🔥 3️⃣ Thread-Safe Lazy (Important)

## ✔ Double-Checked Locking

<pre class="overflow-visible! px-0!" data-start="1414" data-end="1872"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">ThreadSafeSingleton</span><span> {</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">volatile</span><span> </span><span class="ͼe">ThreadSafeSingleton</span><span> </span><span class="ͼe">instance</span><span>;</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">ThreadSafeSingleton</span><span>() {}</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼe">ThreadSafeSingleton</span><span> </span><span class="ͼe">getInstance</span><span>() {</span><br/><span>        </span><span class="ͼ8">if</span><span> (</span><span class="ͼe">instance</span><span> </span><span class="ͼ8">==</span><span> </span><span class="ͼb">null</span><span>) {</span><br/><span>            </span><span class="ͼ8">synchronized</span><span> (</span><span class="ͼe">ThreadSafeSingleton</span><span class="ͼ8">.class</span><span>) {</span><br/><span>                </span><span class="ͼ8">if</span><span> (</span><span class="ͼe">instance</span><span> </span><span class="ͼ8">==</span><span> </span><span class="ͼb">null</span><span>) {</span><br/><span>                    </span><span class="ͼe">instance</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">ThreadSafeSingleton</span><span>();</span><br/><span>                }</span><br/><span>            }</span><br/><span>        }</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼe">instance</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

# 🚀 4️⃣ Best Approach (Recommended)

## ✔ Bill Pugh Singleton (Lazy + Thread Safe)

<pre class="overflow-visible! px-0!" data-start="1964" data-end="2261"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="w-full overflow-x-hidden overflow-y-auto"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">public</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">BillPughSingleton</span><span> {</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼe">BillPughSingleton</span><span>() {}</span><br/><br/><span>    </span><span class="ͼ8">private</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">class</span><span> </span><span class="ͼe">Helper</span><span> {</span><br/><span>        </span><span class="ͼ8">private</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼ8">final</span><span> </span><span class="ͼe">BillPughSingleton</span><span> </span><span class="ͼe">INSTANCE</span><span> </span><span class="ͼ8">=</span><span> </span><span class="ͼ8">new</span><span> </span><span class="ͼe">BillPughSingleton</span><span>();</span><br/><span>    }</span><br/><br/><span>    </span><span class="ͼ8">public</span><span> </span><span class="ͼ8">static</span><span> </span><span class="ͼe">BillPughSingleton</span><span> </span><span class="ͼe">getInstance</span><span>() {</span><br/><span>        </span><span class="ͼ8">return</span><span> </span><span class="ͼe">Helper</span><span class="ͼ8">.</span><span class="ͼe">INSTANCE</span><span>;</span><br/><span>    }</span><br/><span>}</span></div></div></div></div></div></div></div></div></div></div></div></div></pre>

🔥 Real-world Use Cases


| Case          | Type             |
| ------------- | ---------------- |
| Logger        | Lazy             |
| DB Connection | Lazy             |
| Config Loader | Eager            |
| Cache Manager | Lazy<br /><br /> |
