import { styled } from "styled-components";
import { ArrowIcon } from "./arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/priority-types";

interface IFilterByPriority {}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        cursor: pointer;

        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
    }

    svg {
        margin-left: 16px;
    }
`;

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background-color: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`;

export function FilterByPriority(props: IFilterByPriority) {
    const { setPriority } = useFilter();

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(!isOpen);

    const handleUpdatePriority = (value: PriorityType) => {
        setPriority(value);
        setIsOpen(false);
    };

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>
            {isOpen && (
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>
                        Novidades
                    </li>
                    <li
                        onClick={() =>
                            handleUpdatePriority(PriorityType.BIGGEST_PRICE)
                        }
                    >
                        Preço: maior menor
                    </li>
                    <li
                        onClick={() =>
                            handleUpdatePriority(PriorityType.MINOR_PRICE)
                        }
                    >
                        Preço: menor maior
                    </li>
                    <li
                        onClick={() =>
                            handleUpdatePriority(PriorityType.POPULARITY)
                        }
                    >
                        Mais vendidos
                    </li>
                </PriorityFilter>
            )}
        </FilterContainer>
    );
}
