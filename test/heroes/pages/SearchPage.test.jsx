import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

describe('Pruebas en <SearchPage/>', () => {
    test('Debe de mostrarse correctamente con valores por defecto', () => {
        

      const {container}=  render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
        
    });
})
