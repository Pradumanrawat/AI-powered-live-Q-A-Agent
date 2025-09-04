//ai powered live q/a agent 

import {config}from "dotenv";
config();

import{ChatGoogleGenerativeAI} from "@langchain/google-genai";
import{initializeAgentExecutorWithOptions}from "langchain/agents";
import{SerpAPI}from "@langchain/community/tools/serpapi";

const model=new ChatGoogleGenerativeAI(
    {
        model:"models/gemini-2.5-flash",
        maxOutputTokens:2043,
        temperature:0.7,
        apiKey:process.env.GOOGLE_API_KEY,
    }
);

const searchtool=new SerpAPI(
    process.env.SERP_API_KEY,
    {
        location:"India", //optional
    }
);



const agent=await initializeAgentExecutorWithOptions(
    [searchtool],
    model
);

//try a ques
const result=await agent.invoke({
    input:"today tech news ",
});
console.log("output:" ,result.output);
