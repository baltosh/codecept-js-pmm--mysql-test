Feature('mysql_monitoring');

Scenario('check that data is comming from node with name', 
({I, loginPage, homeDashboardPage, sideMenuFragment, mysqlInstanceSummaryPage}
    ) => {

        let pmmServerIp = process.env.pmmserverip;
        let serviceName = process.env.servicename;
        let nodeName = process.env.nodename;

    I.amOnPage(pmmServerIp)
    loginPage.login('admin', 'admin')
    homeDashboardPage.isOpen()
    sideMenuFragment.selectPmmDashboard('MySQL', 'MySQL Summary')
    mysqlInstanceSummaryPage.isOpen()
    mysqlInstanceSummaryPage.hasNode(serviceName,nodeName)
});
// pmmserverip=https://192.168.227.1:8443 servicename=MYSQL_NODE nodename=3d72d88a38c8 npx codeceptjs run ./mysql_monitoring_test.js
// pmmserverip=192.168.227.1:8443 