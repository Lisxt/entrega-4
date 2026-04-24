import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, Alert, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

// Definição do tipo para manter a consistência
export type Noticia = {
  id: number;
  titulo: string;
  conteudo: string;
};

// --- CONFIGURAÇÃO DA URL DA API ---
const API_URL = 'http://192.168.-.-:3000/noticias'; 

// ==========================================
// COMPONENTES REUTILIZÁVEIS
// ==========================================
const NavButton = ({ title, onPress, color = '#333' }: any) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// ==========================================
// 1. LISTA DE NOTÍCIAS (HOME)
// ==========================================
export const HomeScreen = ({ navigation }: any) => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const isFocused = useIsFocused();

  const carregarNoticias = async () => {
    try {
      const response = await axios.get(API_URL);
      setNoticias(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar as notícias da API.");
    }
  };

  useEffect(() => {
    if (isFocused) carregarNoticias();
  }, [isFocused]);

  return (
    <View style={styles.containerList}>
      <Text style={styles.title}>Portal de Notícias (API)</Text>
      
      <NavButton title="+ Criar Nova Notícia" onPress={() => navigation.navigate('NovaNoticia')} color="#2ecc71" />

      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text numberOfLines={2}>{item.conteudo}</Text>
            
            <View style={styles.row}>
              <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => navigation.navigate('EditarNoticia', { noticia: item })}
              >
                <Text style={{color: '#fff'}}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={async () => {
                  await axios.delete(`${API_URL}/${item.id}`);
                  carregarNoticias();
                }}
              >
                <Text style={{color: '#fff'}}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

// ==========================================
// 2. FORMULÁRIO DE CRIAÇÃO
// ==========================================
export const NovaNoticiaScreen = ({ navigation }: any) => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  const salvar = async () => {
    if (!titulo || !conteudo) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await axios.post(API_URL, { titulo, conteudo });
      Alert.alert("Sucesso", "Notícia enviada para a API!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar na API");
    }
  };

  return (
    <View style={styles.containerForm}>
      <Text style={styles.title}>Nova Notícia</Text>
      <TextInput style={styles.input} placeholder="Título" value={titulo} onChangeText={setTitulo} />
      <TextInput 
        style={[styles.input, { height: 100 }]} 
        placeholder="Conteúdo" 
        value={conteudo} 
        onChangeText={setConteudo} 
        multiline 
      />
      <NavButton title="Salvar na API" onPress={salvar} color="#2ecc71" />
    </View>
  );
};

// ==========================================
// 3. FORMULÁRIO DE EDIÇÃO
// ==========================================
export const EditarNoticiaScreen = ({ route, navigation }: any) => {
  const { noticia } = route.params;
  const [titulo, setTitulo] = useState(noticia.titulo);
  const [conteudo, setConteudo] = useState(noticia.conteudo);

  const atualizar = async () => {
    try {
      await axios.put(`${API_URL}/${noticia.id}`, { titulo, conteudo });
      Alert.alert("Sucesso", "Notícia atualizada!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha ao atualizar");
    }
  };

  return (
    <View style={styles.containerForm}>
      <Text style={styles.title}>Editar Notícia</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />
      <TextInput 
        style={[styles.input, { height: 100 }]} 
        value={conteudo} 
        onChangeText={setConteudo} 
        multiline 
      />
      <NavButton title="Atualizar via API" onPress={atualizar} color="#f1c40f" />
    </View>
  );
};

// Mantendo os outros placeholders apenas para não quebrar sua navegação
export const CadastroScreen = () => <View style={styles.container}><Text>Cadastro</Text></View>;
export const BuscaUFScreen = () => <View style={styles.container}><Text>Busca UF</Text></View>;
export const LoginScreen = () => <View style={styles.container}><Text>Login</Text></View>;
export const LembrarScreen = () => <View style={styles.container}><Text>Lembrar Senha</Text></View>;
export const BuscaTagScreen = () => <View style={styles.container}><Text>Busca Tag</Text></View>;
export const DetalheNoticiaScreen = () => <View style={styles.container}><Text>Detalhe</Text></View>;
export const ComentarScreen = () => <View style={styles.container}><Text>Comentar</Text></View>;
export const PerfilAutorScreen = () => <View style={styles.container}><Text>Perfil Autor</Text></View>;
export const MinhasNoticiasScreen = () => <View style={styles.container}><Text>Minhas Notícias</Text></View>;
export const PerfilLeitorScreen = () => <View style={styles.container}><Text>Perfil Leitor</Text></View>;
export const PainelEditorScreen = () => <View style={styles.container}><Text>Painel Editor</Text></View>;
export const PublicarDespublicarScreen = () => <View style={styles.container}><Text>Publicar</Text></View>;
export const EditarQualquerNoticiaScreen = () => <View style={styles.container}><Text>Moderador</Text></View>;
export const PerfilEditorScreen = () => <View style={styles.container}><Text>Perfil Editor</Text></View>;

// ==========================================
// ESTILOS
// ==========================================
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  containerList: { flex: 1, padding: 20, backgroundColor: '#f5f6fa' },
  containerForm: { flex: 1, padding: 20, backgroundColor: '#f5f6fa', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#2c3e50', textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  button: { width: '100%', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#ddd' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  editButton: { backgroundColor: '#3498db', padding: 8, borderRadius: 5, width: '45%', alignItems: 'center' },
  deleteButton: { backgroundColor: '#e74c3c', padding: 8, borderRadius: 5, width: '45%', alignItems: 'center' },
});