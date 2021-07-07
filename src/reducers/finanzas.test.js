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

    it('Delete', () => {
      const result = eliminar(1);

      expect(result).toEqual({
        type: 'ELIMINAR',
        index: 1
      });

    });

  });

})