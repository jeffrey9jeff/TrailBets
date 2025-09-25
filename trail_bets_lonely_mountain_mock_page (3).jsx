import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mountain, Flame, Timer, Users, Trophy } from "lucide-react";

export default function TrailBetsMock() {
  return (
    <div className="min-h-screen text-neutral-900 relative">
      {/* Background image using absolutely positioned div */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/848631/pexels-photo-848631.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      <div className="min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center text-white">
              <Mountain className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-semibold">TrailBets</h1>
            <span className="ml-auto text-sm text-neutral-500">Lonely Mountain</span>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Event + Markets */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Hero */}
            <Card className="shadow-lg bg-white/95">
              <CardContent className="p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 text-green-700">
                    <Mountain className="w-5 h-5" />
                    <span className="font-medium">Lonely Mountain Ultra</span>
                  </div>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-700">Gus v Jeffrey 50km</span>
                </div>
                <div className="mt-2 text-sm text-neutral-600">Saturday, 28 Sep · 07:15</div>

                {/* Head to Head (simplified: names + bold odds only) */}
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-wide text-neutral-500 mb-2">Head to Head</div>
                  <div className="grid grid-cols-2 items-center rounded-t-xl border">
                    <div className="px-4 py-3 font-medium">Gus</div>
                    <div className="text-right px-4 py-3 font-semibold text-neutral-900">$1.92</div>
                  </div>
                  <div className="grid grid-cols-2 items-center border-x border-b rounded-b-xl">
                    <div className="px-4 py-3 font-medium">Jeffrey</div>
                    <div className="text-right px-4 py-3 font-semibold text-neutral-900">$1.72</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form Guide + Winner */}
            <Card className="shadow-lg bg-white/95">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Form Guide</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-12 text-sm border-t">
                  <div className="col-span-8 px-4 py-3 font-medium">Race</div>
                  <div className="col-span-4 px-4 py-3 font-medium">Winner</div>
                </div>
                {[
                  { race: "Jabulani 22km", winner: "Jeffrey" },
                  { race: "UTA100", winner: "Jeffrey" },
                  { race: "City2Surf", winner: "Gus" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 text-sm border-t">
                    <div className="col-span-8 px-4 py-3">{row.race}</div>
                    <div className="col-span-4 px-4 py-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      <span className="font-medium">{row.winner}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Predicted Finish Times */}
            <Card className="shadow-lg bg-white/95">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Predicted Finish Times</CardTitle>
                  <div className="text-xs text-neutral-500 flex items-center gap-2">
                    <Timer className="w-4 h-4" />
                    <span>Under / Over</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Header row */}
                <div className="grid grid-cols-12 text-xs uppercase tracking-wide text-neutral-500 border-t">
                  <div className="col-span-4 px-4 py-2">Runner</div>
                  <div className="col-span-2 px-4 py-2 text-right">Under 5h</div>
                  <div className="col-span-2 px-4 py-2 text-right">5.0–5.5h</div>
                  <div className="col-span-2 px-4 py-2 text-right">Over 5.5h</div>
                  <div className="col-span-2 px-4 py-2 text-right">Predicted</div>
                </div>

                {[
                  { name: "Gus", pred: "5:12:11", under: "$5.90", within: "$1.55", over: "$3.60" },
                  { name: "Jeffrey", pred: "5:07:34", under: "$5.50", within: "$1.50", over: "$3.70" },
                ].map((r, i) => (
                  <div key={i} className="grid grid-cols-12 border-t items-center">
                    <div className="col-span-4 px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">{r.name}</div>
                      </div>
                    </div>
                    <div className="col-span-2 px-4 py-3 text-right">
                      <OddsPill>{r.under}</OddsPill>
                    </div>
                    <div className="col-span-2 px-4 py-3 text-right">
                      <OddsPill highlight>{r.within}</OddsPill>
                    </div>
                    <div className="col-span-2 px-4 py-3 text-right">
                      <OddsPill>{r.over}</OddsPill>
                    </div>
                    <div className="col-span-2 px-4 py-3 text-right font-semibold">{r.pred}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Odds Boost */}
            <Card className="shadow-lg bg-white/95 border-green-600/30">
              <CardContent className="p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-600/10 text-green-700 flex items-center justify-center">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Other Popular Bets – Odds Boost!</div>
                    <div className="text-xs text-neutral-600">$2.40 → $2.80</div>
                  </div>
                </div>
                <div className="text-sm">Mitch Thompson: Finish within 5 mins of predicted time</div>
                <Button className="rounded-xl">Boosted</Button>
              </CardContent>
            </Card>
          </div>

          {/* Right column: Bet Slip */}
          <div className="space-y-6">
            <Card className="shadow-lg bg-white/95 sticky top-16">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center justify-between">
                  Bet Slip
                  <ChevronDown className="w-5 h-5 text-neutral-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-neutral-600">Select a market to add selections here.</div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button variant="outline" className="rounded-xl">Gus $1.92</Button>
                  <Button variant="outline" className="rounded-xl">Jeffrey $1.72</Button>
                </div>
                <div className="mt-4">
                  <label className="text-xs text-neutral-500">Stake</label>
                  <input
                    placeholder="$ Enter amount"
                    className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600/50"
                  />
                  <div className="mt-2 text-xs text-neutral-500">Returns shown are estimates. Odds subject to change.</div>
                  <Button className="w-full mt-3 rounded-xl">Place Bet</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-white/95">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Popular Bets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Jeffrey to Win", odds: "$1.72" },
                  { title: "Gus 5.0–5.5h", odds: "$1.55" },
                  { title: "Total Winning Margin < 5m", odds: "$2.40" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center justify-between text-sm p-3 rounded-xl border">
                    <span>{b.title}</span>
                    <Button size="sm" variant="outline" className="rounded-xl">{b.odds}</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="border-t bg-white/95">
          <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-neutral-500">
            ⛰️ TrailBets
          </div>
        </footer>
      </div>
    </div>
  );
}

function OddsPill({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-medium border",
        highlight ? "bg-green-600 text-white border-green-600" : "bg-white text-neutral-800",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
