export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For QA Engineers &amp; Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Record Browser Actions as<br />
          <span className="text-[#58a6ff]">Reusable Automation Scripts</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Click, type, navigate — SnippetRec captures every interaction and exports clean
          Playwright or Selenium scripts in seconds. No manual scripting required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Recording — $29/mo
        </a>
        <div className="mt-12 rounded-xl border border-[#30363d] bg-[#161b22] p-5 text-left font-mono text-sm text-[#8b949e] overflow-x-auto">
          <p className="text-[#58a6ff] mb-1">// Auto-generated Playwright script</p>
          <p><span className="text-[#ff7b72]">await</span> page.<span className="text-[#d2a8ff]">goto</span>(<span className="text-[#a5d6ff]">'https://example.com'</span>);</p>
          <p><span className="text-[#ff7b72]">await</span> page.<span className="text-[#d2a8ff]">click</span>(<span className="text-[#a5d6ff]">'#login-btn'</span>);</p>
          <p><span className="text-[#ff7b72]">await</span> page.<span className="text-[#d2a8ff]">fill</span>(<span className="text-[#a5d6ff]">'input[name="email"]'</span>, <span className="text-[#a5d6ff]">'user@test.com'</span>);</p>
          <p><span className="text-[#ff7b72]">await</span> page.<span className="text-[#d2a8ff]">click</span>(<span className="text-[#a5d6ff]">'button[type="submit"]'</span>);</p>
          <p><span className="text-[#ff7b72]">await</span> expect(page).<span className="text-[#d2a8ff]">toHaveURL</span>(<span className="text-[#a5d6ff]">/dashboard/</span>);</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited script recordings",
              "Export to Playwright & Selenium",
              "Web dashboard to manage scripts",
              "Edit & annotate recordings",
              "Chrome & Firefox extension",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which browsers and frameworks are supported?",
              a: "The extension works in Chrome and Firefox. Scripts can be exported as Playwright (TypeScript/JavaScript) or Selenium (Python/Java) — more frameworks coming soon."
            },
            {
              q: "Can I edit the generated scripts?",
              a: "Yes. The web dashboard includes a built-in code editor where you can tweak selectors, add assertions, and reorganize steps before exporting."
            },
            {
              q: "Is there a free trial?",
              a: "We offer a 7-day money-back guarantee. If SnippetRec doesn't fit your workflow, contact support within 7 days for a full refund — no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} SnippetRec. All rights reserved.
      </footer>
    </main>
  );
}
