function PowerBIEmbed({ src }) {
  return (
    <div className="w-full h-[600px] mb-8 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Power BI Report"
        width="100%"
        height="100%"
        src={src}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default PowerBIEmbed;


// function PowerBIEmbed() {
//     return (
//       <div className="w-full h-screen">
//         <iframe 
//           title="Power BI Report"
//           width="100%" 
//           height="100%"
//           src="https://app.powerbi.com/reportEmbed?reportId=171f5c1b-20fa-4251-98a9-54d0604373db&autoAuth=true&ctid=108bc864-cdf5-4ec3-8b7c-4eb06be1b41d&pageName=089f0ad2ab64b37d6166&navContentPaneEnabled=false"
//           frameBorder="0"
//           allowFullScreen
//         />
//       </div>
        
//     );
//   }
  
//   export default PowerBIEmbed;

