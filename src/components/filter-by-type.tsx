import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components";

interface IFilterItemProps {
    selected?: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

const FilterItem = styled.li<IFilterItemProps>`
    font-family: inherit;
    font-weight: ${(props) => (props.selected ? "600" : "400")};
    line-height: 22px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${(props) =>
        props.selected ? "4px solid var(--orange-low)" : ""};
`;

export function FilterByType() {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    };

    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>
            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>
            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    );
}
