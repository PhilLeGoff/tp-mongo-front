import React from "react";
import PowerBIEmbed from "../components/PowerBIEmbed";

export default function Analytics() {
  const sections = [
    { title: "📊 Movie Data Dashboard", pageName: "c0e0826174f89ba5acd8" },
    { title: "📈 Movie Release Timeline", pageName: "19fbbac5ea0d134eedf8" },
    { title: "🏆 Top Rated Genre", pageName: "01388b741700e1cc9395" },
    { title: "🔥 Top Movies by Genre", pageName: "089f0ad2ab64b37d6166" },
    { title: "🌐 Top Movies by Original Language", pageName: "a24a5b2e617176494116" },
    { title: "📝 Top Movie Title Word", pageName: "6239a1fd4bdc53f2923e" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-4xl font-bold text-cyan-300 mb-10 text-center drop-shadow">
        📊 Analytics Dashboard
      </h2>

      <div className="space-y-12">
        {sections.map(({ title, pageName }, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
            <PowerBIEmbed
              src={`https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=${pageName}&navContentPaneEnabled=false`}
              height="1000px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
