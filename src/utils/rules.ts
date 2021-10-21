export const rules = {
  reuired: (message: string = "Обязательное поле") => ({
    required: true,
    message,
  }),
};
