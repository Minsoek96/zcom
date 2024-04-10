'use client';

import styled from 'styled-components';

export const Container = styled.div`
    > div:first-child {
        display: flex;

        > div:last-child {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
            width: 480px;
        }
    }
`;

export const a = {};
