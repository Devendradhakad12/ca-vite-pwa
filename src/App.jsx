import { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");

  const [ca, setCA] = useState(0);
  const [cb, setCB] = useState(0);
  const [cc, setCC] = useState(0);
  const [cd, setCD] = useState(0);

  const [view, setView] = useState(false);

  const caFunc = (e) => {
    e.preventDefault();
    const to = Number(a) + Number(b) + Number(c) + Number(d);
    const per = to / 4;
    setCA(per - Number(a));
    setCB(per - Number(b));
    setCC(per - Number(c));
    setCD(per - Number(d));
    setView(true);
  };

  /*   console.log({ a, b, c, d });
  console.log({ ca, cb, cc, cd }); */

  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col gap-5 pt-[10%] items-center">
      <div className="flex flex-col gap-3">
        <form className="flex flex-col gap-3" onSubmit={caFunc}>
          <input
            type="number"
            placeholder="As Sir"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />

          <input
            type="number"
            placeholder="Param Ji"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />

          <input
            type="number"
            placeholder="Dev"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={c}
            onChange={(e) => setC(e.target.value)}
          />

          <input
            type="number"
            placeholder="Bal"
            className="input bg-slate-900 text-white input-bordered input-primary w-full max-w-xs text-center"
            value={d}
            onChange={(e) => setD(e.target.value)}
          />

          <button className="btn btn-primary text-xl">Calculate</button>
        </form>
      </div>

      {view ? (
        <div>
          <div className="card sm:w-96 w-[100%] bg-base-100 shadow-xl">
            <div className="card-body bg-slate-800 text-white rounded-xl">
              <p className="text-center">
                {ca < 0 ? (
                  <>{`As Sir ko lene he ₹${ca * -1}`}</>
                ) : (
                  <>{`As Sir ko dene he ₹${ca}`}</>
                )}
                <br />
                {cb < 0
                  ? `Param Ji ko lene he ₹${cb * -1}`
                  : `Param Ji ko dene he ₹${cb}`}
                <br />
                {cc < 0
                  ? `Dev ko lene he ₹${cc * -1}`
                  : `Dev ko dene he ₹${cc}`}
                <br />
                {cd < 0
                  ? `Bal ko lene he ₹${cd * -1}`
                  : `Bal ko dene he ₹${cd}`}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;