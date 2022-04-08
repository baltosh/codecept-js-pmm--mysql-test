Feature('mysql_monitoring');

Scenario('check that data is comming from node with correct name', 
({I, loginPage, homeDashboardPage, sideMenuFragment, mysqlInstanceSummaryPage}) => {
    const pmmServerIp = process.env.pmmserverip;
    const serviceName = process.env.servicename;
    const nodeName = process.env.nodename;

    I.amOnPage(pmmServerIp)
    loginPage.login('admin', 'admin')
    homeDashboardPage.isOpen()
    sideMenuFragment.selectPmmDashboard('MySQL', 'MySQL Summary')
    mysqlInstanceSummaryPage.isOpen()
    mysqlInstanceSummaryPage.hasNode(serviceName, nodeName)
});