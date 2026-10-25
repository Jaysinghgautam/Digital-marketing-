import Reveal from "../Reveal";

const METRICS = [
  { label: "Qualified Leads", value: "+340%", sub: "↑ 42% this month", valueClass: "hm-white", subClass: "hm-green" },
  { label: "Cost Per Acquisition", value: "-38%", sub: "Optimized ad spend", valueClass: "hm-white", subClass: "hm-green" },
  { label: "Avg ROAS", value: "4.2x", sub: "Meta & Google", valueClass: "hm-cyan", subClass: "hm-muted" },
  { label: "Brand Impressions", value: "1.2M+", sub: "Organic & paid reach", valueClass: "hm-white", subClass: "hm-green" },
];

const MONTHS = ['J','F','M','A','M','J','J','A','S','O','N','D'];
const CHART_VALS = [35, 48, 42, 65, 55, 78, 62, 85, 74, 95, 88, 100];

export default function HeroDashboard() {
  return (
    <section className="hero-dashboard-section">
      <div className="hero-dashboard-wrapper">
        <Reveal variant="scale" delay={100}>
          <div className="hero-card-outer">
            <div className="hero-card-inner">

              {/* Card Header */}
              <div className="hero-card-header">
                <div className="hero-card-dots">
                  <div className="hero-dot-red" />
                  <div className="hero-dot-yellow" />
                  <div className="hero-dot-green" />
                  <span className="hero-card-url">ascend-growth-analytics.live</span>
                </div>
                <div className="hero-live-badge">
                  <span className="hero-live-pulse" />
                  Live Campaign Metrics
                </div>
              </div>

              {/* Metric Cards */}
              <div className="hero-metrics">
                {METRICS.map((m, i) => (
                  <div key={i} className="hero-metric-card">
                    <div className="hero-metric-label">{m.label}</div>
                    <div className={`hero-metric-value ${m.valueClass}`}>{m.value}</div>
                    <div className={`hero-metric-sub ${m.subClass}`}>{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Bar Chart */}
              <div className="hero-chart">
                {CHART_VALS.map((val, idx) => (
                  <div key={idx} className="hero-chart-bar-wrap">
                    <div className="hero-chart-bar" style={{ height: `${val}%` }} />
                    <span className="hero-chart-label">
                      {MONTHS[idx]}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
