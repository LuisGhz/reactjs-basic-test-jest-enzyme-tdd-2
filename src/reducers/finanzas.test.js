import reducer, { agregar, eliminar } from "./finanzas";

describe('Finanzas Duck', () => {

  describe('Action creators', () => {
    
    it('Add', () => {
      const result = agregar(1);

      expect(result).toEqual({
        type: 'AGREGAR',
        payload: 1
      });
      
    });

  });

})