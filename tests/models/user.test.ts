import User from '../../src/models/user';

describe('User Model', () => {
  beforeAll(async () => {
    await User.sync({ force: true });
  });

  afterEach(async () => {
    await User.destroy({ where: {} });
  });

  it('should create a user successfully', async () => {
    const user = await User.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'securepassword123',
    });

    expect(user.id).toBeDefined();
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.password).toBe('securepassword123');
  });

  it('should not allow duplicate emails', async () => {
    await User.create({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'securepassword123',
    });

    await expect(
      User.create({
        name: 'John Doe',
        email: 'jane.doe@example.com',
        password: 'anotherpassword456',
      })
    ).rejects.toThrow();
  });

  it('should require a name, email, and password', async () => {
    await expect(
      User.create({
        email: 'missing.name@example.com',
        password: 'securepassword123',
      } as any)
    ).rejects.toThrow();

    await expect(
      User.create({
        name: 'No Email',
        password: 'securepassword123',
      } as any)
    ).rejects.toThrow();

    await expect(
      User.create({
        name: 'No Password',
        email: 'no.password@example.com',
      } as any)
    ).rejects.toThrow();
  });

  it('should allow undefined for confirmedAt', async () => {
    const user = await User.create({
      name: 'Optional ConfirmedAt',
      email: 'optional.confirmed@example.com',
      password: 'securepassword123',
    });

    expect(user.confirmedAt).toBeUndefined();
  });

  it('should set timestamps correctly', async () => {
    const user = await User.create({
      name: 'Timestamped User',
      email: 'timestamped.user@example.com',
      password: 'securepassword123',
    });

    expect(user.createdAt).toBeDefined();
    expect(user.updatedAt).toBeDefined();
  });
});
