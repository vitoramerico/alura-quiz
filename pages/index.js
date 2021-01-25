import styled from "styled-components";
import db from "../db.json";
import BoxWidget from "../src/components/boxWidget";
import Footer from "../src/components/footer";
import GitHubCorner from "../src/components/gitHubCorner";
import QuizBackground from "../src/components/quizBackground";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <BoxWidget>
          <BoxWidget.Header>
            <h1>The legend of zelda</h1>
          </BoxWidget.Header>
          <BoxWidget.Content>
            <p>lorem ipsum dolor sit amet..</p>
          </BoxWidget.Content>
        </BoxWidget>
        <BoxWidget>
          <BoxWidget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet..</p>
          </BoxWidget.Content>
        </BoxWidget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  );
}
