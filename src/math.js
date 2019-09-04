import React, { Component } from 'react';

export const RoundRobin=(total,selected)=>{
selected===total-1 ? 0 : selected +1
}
export const RandomNum = (num)=>{
   Math.floor(Math.random() * num)
}