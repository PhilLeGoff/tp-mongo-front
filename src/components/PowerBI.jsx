function PowerBIEmbed() {
    return (
      <div className="w-full h-screen">
        <iframe 
          title="Power BI Report"
          width="100%" 
          height="100%"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzk1NWYxYWYtM2JiYi00YWQ3LWFlMjctNGM0MTQzNmU0MTA3IiwidCI6IjEwOGJjODY0LWNkZjUtNGVjMy04YjdjLTRlYjA2YmUxYjQxZCIsImMiOjl9"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
  
  export default PowerBIEmbed;
  