import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  apiGetUsuarios,
  apiGetUsuarioById,
  apiGetUsuarioByIdentificador,
  apiCreateUsuario,
  apiUpdateUsuario,
  apiDeleteUsuario,
  apiSignIn,
  apiLogout,
} from "../../service/api";
import { AuthState } from "./authTypes";

const initialState: AuthState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};
// async thunks para o login
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (
    data: {
      identificador: string;
      password: string;
    },
    thunkAPI,
  ) => {
    try {
      const response = await apiSignIn(data.identificador, data.password);

      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// async thunk para listar todos os usuarios
export const getUsuarios = createAsyncThunk(
  "auth/getUsuarios",
  async (_, thunkAPI) => {
    try {
      return await apiGetUsuarios();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
// async thunk pra procurar por id
export const getUsuarioById = createAsyncThunk(
  "auth/getUsuarioById",
  async (id: number, thunkAPI) => {
    try {
      return await apiGetUsuarioById(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
// async thunk para procurar por identificador
export const getUsuarioByIdentificador = createAsyncThunk(
  "auth/getUsuarioByIdentificador",
  async (identificador: string, thunkAPI) => {
    try {
      return await apiGetUsuarioByIdentificador(identificador);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
// criar usuario
export const createUsuario = createAsyncThunk(
  "auth/createUsuario",
  async (
    data: {
      identificador: string;
      nome: string;
      role: string;
      activo: boolean;
      password?: string;
    },
    thunkAPI,
  ) => {
    try {
      return await apiCreateUsuario(data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// actualizar user
export const updateUsuario = createAsyncThunk(
  "auth/updateUsuario",
  async (
    {
      id,
      data,
    }: {
      id: number;
      data: any;
    },
    thunkAPI,
  ) => {
    try {
      return await apiUpdateUsuario(id, data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// eliminar user
export const deleteUsuario = createAsyncThunk(
  "auth/deleteUsuario",
  async (id: string, thunkAPI) => {
    try {
      await apiDeleteUsuario(id);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
// logout
export const logout = createAsyncThunk("auth/logout", async () => {
  apiLogout();
});
// slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      // LOGIN
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(signIn.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LISTAR
      .addCase(getUsuarios.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      // BUSCAR ID
      .addCase(getUsuarioById.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      // BUSCAR IDENTIFICADOR
      .addCase(getUsuarioByIdentificador.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      // CREATE
      .addCase(createUsuario.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // UPDATE
      .addCase(updateUsuario.fulfilled, (state, action) => {
        state.users = state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u,
        );
      })

      // DELETE
      .addCase(deleteUsuario.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (u) => u.id !== Number(action.payload),
        );
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.users = [];
      });
  },
});

export default authSlice.reducer;
