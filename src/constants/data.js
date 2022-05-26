import images from "./images"

const data = {
    user: {
        name: 'DAH',
        img: images.avt
    },
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '3000',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '$678',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Nombre de Service',
        value: '678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '9.876K ',
            title: 'Formulaire'
        },
        {
            value: '300K',
            title: 'Clients'
        },
        {
            value: '1.234K',
            title: 'Rendez-Vous'
        },
        {
            value: '1028',
            title: 'Candidature'
        }
    ],
    revenueByChannel: [
        {
            title: 'Ouverture des comptes',
            value: 70
        },
        {
            title: 'Demande des Crédit',
            value: 70
        },
        {
            title: 'Banque a distance',
            value: 60
        },
        {
            title: 'Autre',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data