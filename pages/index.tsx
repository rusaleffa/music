import React from 'react';
import {Button} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
    return (
        <MainLayout>
            <h1>Добро пожаловать!</h1>
          <Button>
              hello
          </Button>
        </MainLayout>
    );
};

export default Index;