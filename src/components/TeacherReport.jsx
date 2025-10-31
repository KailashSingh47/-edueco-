import React from 'react';

const TeacherReport = ({ region, variables, outcomes }) => {
  const generateReport = () => {
    const reportWindow = window.open('', '_blank');
    reportWindow.document.write(`
      <html>
        <head>
          <title>EduEco Simulation Report</title>
          <style>
            body { font-family: sans-serif; padding: 20px; }
            h1, h2 { color: #2c3e50; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .metric { margin-bottom: 15px; }
            .metric-bar { width: 100%; background-color: #e0e0e0; border-radius: 4px; }
            .metric-fill { height: 20px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <h1>EduEco Simulation Report</h1>
          <h2>Region: ${region.name}</h2>
          <p><strong>Description:</strong> ${region.description}</p>
          
          <h3>Student's Choices</h3>
          <table>
            <tr><th>Variable</th><th>Value</th></tr>
            ${Object.keys(variables).map(key => `
              <tr>
                <td>${region.variables[key].label}</td>
                <td>${variables[key]}${region.variables[key].unit}</td>
              </tr>
            `).join('')}
          </table>

          <h3>Resulting Ecosystem Health</h3>
          ${Object.keys(outcomes).map(key => `
            <div class="metric">
              <strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${Math.round(outcomes[key])}%
              <div class="metric-bar">
                <div class="metric-fill" style="width: ${outcomes[key]}%; background-color: ${outcomes[key] > 65 ? '#4CAF50' : outcomes[key] > 35 ? '#FFC107' : '#F44336'}"></div>
              </div>
            </div>
          `).join('')}
          
          <hr>
          <p><em>Generated on ${new Date().toLocaleString()}</em></p>
        </body>
      </html>
    `);
    reportWindow.document.close();
    reportWindow.print();
  };

  return (
    <div className="teacher-report-section">
      <button onClick={generateReport} className="report-button">
        📄 Generate PDF Report for Discussion
      </button>
    </div>
  );
};

export default TeacherReport;