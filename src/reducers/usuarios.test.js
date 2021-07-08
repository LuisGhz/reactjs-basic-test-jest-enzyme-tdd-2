import { fetchUsuarios } from "./usuarios";

describe('Duck usuarios', () => {

  describe('fetchUsuarios', () => {

    it('Handle success', async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const services = {
        axios: {
          get: jest.fn().mockResolvedValue({
            data: 1
          })
        }
      }
      await fetchUsuarios()(dispatch, getState, services)

      expect(dispatch.mock.calls).toEqual([
        [{ type: 'FETCH_USUARIOS_START', error: false }],
        [{ type: 'FETCH_USUARIOS_SUCCESS', payload: 1 }]
      ])
    });

    it('Handle Error', async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const services = {
        axios: {
          get: jest.fn().mockRejectedValue(1)
        }
      }
      await fetchUsuarios()(dispatch, getState, services)

      expect(dispatch.mock.calls).toEqual([
        [{ type: 'FETCH_USUARIOS_START', error: false }],
        [{ type: 'FETCH_USUARIOS_ERROR', payload: 1, error: true }]
      ])
    });

  });

});