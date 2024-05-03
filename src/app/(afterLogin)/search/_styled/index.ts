'use client';

import styled from 'styled-components';

export const Container = styled.div`
    > div:first-child {
        display: flex;

        > div:last-child {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1.5rem;
            width: 48rem;
        }
    }
`;

export const a = {};
