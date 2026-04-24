import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 1. Importando a função para inicializar o banco de dados (Passo 3)
import { setupDatabase } from './src/database';

// Importando todas as telas do nosso arquivo src/screens.tsx
import {
  HomeScreen, CadastroScreen, BuscaUFScreen, LoginScreen, LembrarScreen,
  BuscaTagScreen, DetalheNoticiaScreen, ComentarScreen,
  PerfilAutorScreen, MinhasNoticiasScreen, NovaNoticiaScreen, EditarNoticiaScreen,
  PerfilLeitorScreen, PainelEditorScreen, PublicarDespublicarScreen, EditarQualquerNoticiaScreen, PerfilEditorScreen
} from './src/screens';

const Stack = createStackNavigator();

export default function App() {

  // 2. Inicializa a tabela do banco de dados quando o aplicativo é aberto (Passo 3)
  useEffect(() => {
    setupDatabase();
  }, []);

  return (
    // O GestureHandlerRootView DEVE ser o pai de todos e ter flex: 1
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Portal de Notícias' }} />
          
          {/* Telas Gerais */}
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="BuscaUF" component={BuscaUFScreen} options={{ title: 'Busca por Estado' }} />
          <Stack.Screen name="BuscaTag" component={BuscaTagScreen} options={{ title: 'Busca por Tag' }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Entrar' }} />
          <Stack.Screen name="Lembrar" component={LembrarScreen} options={{ title: 'Recuperar Senha' }} />
          <Stack.Screen name="DetalheNoticia" component={DetalheNoticiaScreen} options={{ title: 'Notícia' }} />
          <Stack.Screen name="Comentar" component={ComentarScreen} options={{ title: 'Deixar Comentário' }} />

          {/* Telas do Autor */}
          <Stack.Screen name="PerfilAutor" component={PerfilAutorScreen} options={{ title: 'Painel do Autor' }} />
          <Stack.Screen name="MinhasNoticias" component={MinhasNoticiasScreen} options={{ title: 'Minhas Notícias' }} />
          <Stack.Screen name="NovaNoticia" component={NovaNoticiaScreen} options={{ title: 'Nova Notícia' }} />
          <Stack.Screen name="EditarNoticia" component={EditarNoticiaScreen} options={{ title: 'Editar Notícia' }} />

          {/* Telas do Leitor */}
          <Stack.Screen name="PerfilLeitor" component={PerfilLeitorScreen} options={{ title: 'Área do Leitor' }} />

          {/* Telas do Editor */}
          <Stack.Screen name="PainelEditor" component={PainelEditorScreen} options={{ title: 'Painel de Controle' }} />
          <Stack.Screen name="PublicarDespublicar" component={PublicarDespublicarScreen} options={{ title: 'Gerenciar Publicações' }} />
          <Stack.Screen name="EditarQualquerNoticia" component={EditarQualquerNoticiaScreen} options={{ title: 'Moderação' }} />
          <Stack.Screen name="PerfilEditor" component={PerfilEditorScreen} options={{ title: 'Meu Perfil' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}