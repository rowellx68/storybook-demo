import { Server } from 'miragejs';

if (process.env.NODE_ENV === 'development') {
  new Server({
    routes() {
      this.namespace = 'api';

      this.post('login', () => {
        return {
          id: '971b4548-702d-4007-9dd6-7e9dc03ba9e7',
          firstName: 'Rowell',
          lastName: 'Heria',
          roles: ['User', 'Approver'],
          authenticated: true,
          currentYearAllowance: {
            base: 187.5,
            extra: 0,
            bought: 22.5,
            used: 22.5,
            sold: 0,
          },
        };
      });
    },
  });
}
