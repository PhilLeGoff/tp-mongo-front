import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import PowerBIEmbed from '../components/PowerBI';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">🎬 Movie Explorer</h1>
      <SearchBar />
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">📊 Movie Data Dashboard</h2>
        <PowerBIEmbed src="https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=c0e0826174f89ba5acd8&navContentPaneEnabled=false" />
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">📈 Movie Release Timeline</h2>
        <PowerBIEmbed src="https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=19fbbac5ea0d134eedf8&navContentPaneEnabled=false" />
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">🏆 Top Rated Genre</h2>
        <PowerBIEmbed src="https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=01388b741700e1cc9395&navContentPaneEnabled=false" />
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">🔥 Top Movies by Genre</h2>
        <PowerBIEmbed src="https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=089f0ad2ab64b37d6166&navContentPaneEnabled=false" />
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">🔥 Top Movies by Original Language</h2>
        <PowerBIEmbed src="https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=a24a5b2e617176494116&navContentPaneEnabled=false" />
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">🔥 Top Movie Title Word</h2>
        <PowerBIEmbed src="https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=6239a1fd4bdc53f2923e&navContentPaneEnabled=false" />
      </div>
      <MovieGrid />
    </div>
  );
}