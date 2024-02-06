export const SidebarData = [
    {
        title: 'Notifications',
        // balise svg pour chaque icone, exportée depuis les icônes conçues à partir de Figma
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32.0183C24.8366 32.0183 32 24.8549 32 16.0183C32 7.18176 24.8366 0.0183105 16 0.0183105C7.16344 0.0183105 0 7.18176 0 16.0183C0 24.8549 7.16344 32.0183 16 32.0183ZM14.8288 21.0431L14.4865 4.01831H17.5856L17.2613 21.0431H14.8288ZM17.4234 27.4894C17.027 27.842 16.5526 28.0183 16 28.0183C15.4595 28.0183 14.991 27.842 14.5946 27.4894C14.1982 27.1368 14 26.707 14 26.2001C14 25.6932 14.1982 25.2635 14.5946 24.9109C14.991 24.5472 15.4595 24.3654 16 24.3654C16.5526 24.3654 17.027 24.5472 17.4234 24.9109C17.8078 25.2635 18 25.6932 18 26.2001C18 26.707 17.8078 27.1368 17.4234 27.4894Z" fill="#013746"/></svg>,
        link: '/admin-dashboard/notifications'
    },
    {
        title: 'Tous les projets',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"><path d="M1.5 3.78302C1.5 2.53225 2.51394 1.51831 3.76471 1.51831H11.2941C12.5449 1.51831 13.5588 2.53225 13.5588 3.78302V11.3124C13.5588 12.5632 12.5449 13.5771 11.2941 13.5771H3.76471C2.51394 13.5771 1.5 12.5632 1.5 11.3124V3.78302ZM18.4412 3.78302C18.4412 2.53225 19.4551 1.51831 20.7059 1.51831H28.2353C29.4861 1.51831 30.5 2.53225 30.5 3.78302V11.3124C30.5 12.5632 29.4861 13.5771 28.2353 13.5771H20.7059C19.4551 13.5771 18.4412 12.5632 18.4412 11.3124V3.78302ZM1.5 20.7242C1.5 19.4734 2.51394 18.4595 3.76471 18.4595H11.2941C12.5449 18.4595 13.5588 19.4734 13.5588 20.7242V28.2536C13.5588 29.5044 12.5449 30.5183 11.2941 30.5183H3.76471C2.51394 30.5183 1.5 29.5044 1.5 28.2536V20.7242ZM18.4412 20.7242C18.4412 19.4734 19.4551 18.4595 20.7059 18.4595H28.2353C29.4861 18.4595 30.5 19.4734 30.5 20.7242V28.2536C30.5 29.5044 29.4861 30.5183 28.2353 30.5183H20.7059C19.4551 30.5183 18.4412 29.5044 18.4412 28.2536V20.7242Z" stroke="#013746" stroke-width="3"/></svg>,
        link: '/admin-dashboard'
    },
    {
        title: 'Projets en cours',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none"><path d="M31.25 21.5853C31.5833 21.7777 31.5833 22.2589 31.25 22.4513L20.75 28.5135C20.4167 28.7059 20 28.4654 20 28.0805V15.9561C20 15.5712 20.4167 15.3307 20.75 15.5231L31.25 21.5853Z" fill="#013746"/><path d="M0 19.1196L4.9281 10.6746V10.669C5.56703 9.57449 6.73377 8.90222 8.00052 8.90222H26.6684V7.12433C26.6684 5.16309 25.0739 3.56854 23.1126 3.56854H16.59C15.6455 3.56854 14.7398 3.19629 14.0731 2.52958L12.6008 1.05727C11.9341 0.390557 11.0285 0.0183105 10.084 0.0183105H3.55579C1.59455 0.0183105 0 1.61286 0 3.5741V19.1196Z" fill="#013746"/><path d="M8.00052 10.6857C7.36715 10.6857 6.78377 11.019 6.46153 11.5691L6.46709 11.5635L0.24446 22.2309C-0.0777829 22.7809 -0.0777828 23.4587 0.238904 24.0143C0.555592 24.5699 1.13896 24.9088 1.77789 24.9088H18V15.9561C18 14.0316 20.0833 12.8288 21.75 13.7911L29.0498 18.0056L31.7576 13.3636C32.0799 12.8136 32.0799 12.1358 31.7632 11.5802C31.4465 11.0246 30.8631 10.6857 30.2242 10.6857H8.00052Z" fill="#013746"/></svg>,
        link: '/admin-dashboard/en-cours'
    },
    {
        title: 'Projets terminés',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none"><path d="M0 19.6825L4.9281 11.2375V11.232C5.56703 10.1375 6.73377 9.46521 8.00052 9.46521H26.6684V7.68732C26.6684 5.72608 25.0739 4.13153 23.1126 4.13153H16.59C15.6455 4.13153 14.7398 3.75928 14.0731 3.09257L12.6008 1.62026C11.9341 0.953545 11.0285 0.581299 10.084 0.581299H3.55579C1.59455 0.581299 0 2.17585 0 4.13709V19.6825Z" fill="#013746"/><path d="M8.00052 11.2487C7.36715 11.2487 6.78377 11.582 6.46153 12.132L6.46709 12.1265L0.24446 22.7939C-0.0777828 23.3439 -0.0777828 24.0217 0.238904 24.5773C0.555592 25.1329 1.13896 25.4718 1.77789 25.4718H16.1989C16.0686 24.8622 16 24.2298 16 23.5813C16 18.6107 20.0294 14.5813 25 14.5813C27.003 14.5813 28.8532 15.2356 30.3485 16.3422L31.7576 13.9266C32.0799 13.3766 32.0799 12.6988 31.7632 12.1432C31.4465 11.5876 30.8631 11.2487 30.2242 11.2487H8.00052Z" fill="#013746"/><path d="M24.5 29.5813C28.0899 29.5813 31 26.6712 31 23.0813C31 21.7643 30.6083 20.5388 29.9351 19.5149L24.1608 26.7328L20.1814 23.322L21.3901 21.9119L23.9107 24.0725L28.6836 18.1064C27.553 17.1547 26.0935 16.5813 24.5 16.5813C20.9101 16.5813 18 19.4914 18 23.0813C18 26.6712 20.9101 29.5813 24.5 29.5813Z" fill="#013746"/></svg>,
        link: '/admin-dashboard/projets-finis'
    },
    {
        title: 'Gestion des comptes',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none"><path d="M24.8 0.581299C23.7391 0.581299 22.7217 1.00931 21.9716 1.77118C21.2214 2.53304 20.8 3.56636 20.8 4.6438C20.8 5.72124 21.2214 6.75455 21.9716 7.51642C22.7217 8.27829 23.7391 8.7063 24.8 8.7063C25.8609 8.7063 26.8783 8.27829 27.6284 7.51642C28.3786 6.75455 28.8 5.72124 28.8 4.6438C28.8 3.56636 28.3786 2.53304 27.6284 1.77118C26.8783 1.00931 25.8609 0.581299 24.8 0.581299ZM6.4 0.581299C5.33913 0.581299 4.32172 1.00931 3.57157 1.77118C2.82143 2.53304 2.4 3.56636 2.4 4.6438C2.4 5.72124 2.82143 6.75455 3.57157 7.51642C4.32172 8.27829 5.33913 8.7063 6.4 8.7063C7.46087 8.7063 8.47828 8.27829 9.22843 7.51642C9.97857 6.75455 10.4 5.72124 10.4 4.6438C10.4 3.56636 9.97857 2.53304 9.22843 1.77118C8.47828 1.00931 7.46087 0.581299 6.4 0.581299ZM32 15.7497C32 12.7586 29.61 10.3313 26.665 10.3313H24.53C23.735 10.3313 22.98 10.509 22.3 10.8239C22.365 11.1895 22.395 11.5704 22.395 11.9563C22.395 13.8961 21.555 15.6379 20.23 16.8313C20.24 16.8313 20.25 16.8313 20.265 16.8313H30.935C31.52 16.8313 32 16.3438 32 15.7497ZM11.735 16.8313C11.745 16.8313 11.755 16.8313 11.77 16.8313C10.44 15.6379 9.605 13.8961 9.605 11.9563C9.605 11.5704 9.64 11.1946 9.7 10.8239C9.02 10.504 8.265 10.3313 7.47 10.3313H5.335C2.39 10.3313 0 12.7586 0 15.7497C0 16.3489 0.48 16.8313 1.065 16.8313H11.735ZM20.8 11.9563C20.8 10.6634 20.2943 9.42339 19.3941 8.50915C18.4939 7.59491 17.273 7.0813 16 7.0813C14.727 7.0813 13.5061 7.59491 12.6059 8.50915C11.7057 9.42339 11.2 10.6634 11.2 11.9563C11.2 13.2492 11.7057 14.4892 12.6059 15.4034C13.5061 16.3177 14.727 16.8313 16 16.8313C17.273 16.8313 18.4939 16.3177 19.3941 15.4034C20.2943 14.4892 20.8 13.2492 20.8 11.9563ZM25.6 25.2254C25.6 21.4879 22.615 18.4563 18.935 18.4563H13.065C9.385 18.4563 6.4 21.4879 6.4 25.2254C6.4 25.9719 6.995 26.5813 7.735 26.5813H24.265C25 26.5813 25.6 25.977 25.6 25.2254Z" fill="#013746"/></svg>,
        link: '/admin-dashboard/comptes'
    }
]