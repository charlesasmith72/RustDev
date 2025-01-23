### **Options for `rustfmt`**

`rustfmt` is Rust's official tool for formatting code according to style guidelines. It ensures consistent formatting across Rust projects. You can customize its behavior using various options specified in a configuration file (`rustfmt.toml`) or through command-line arguments.

---

### **Key Features**
1. Automatically formats Rust code.
2. Enforces a consistent style based on community standards.
3. Supports customization via configuration.

---

### **Using `rustfmt`**

1. Format a single file:
   ```bash
   rustfmt file.rs
   ```

2. Format all files in a project:
   ```bash
   cargo fmt
   ```

---

### **Configuration File (`rustfmt.toml`)**

You can customize `rustfmt` behavior by creating a `rustfmt.toml` file in the project root. Below are some of the most commonly used configuration options.

---

### **Formatting Options**

| Option                         | Default      | Description                                                                 |
|--------------------------------|--------------|-----------------------------------------------------------------------------|
| `max_width`                    | `100`        | The maximum width of each line.                                            |
| `tab_spaces`                   | `4`          | Number of spaces for tabs.                                                 |
| `use_small_heuristics`         | `Default`    | Controls formatting based on line width (`Default`, `Off`, `Max`).         |
| `fn_single_line`               | `false`      | Allows single-line function signatures.                                    |
| `fn_args_layout`               | `Tall`       | How function arguments are laid out (`Tall`, `Compressed`, `Block`).       |
| `struct_lit_single_line`       | `false`      | Allows struct literals on a single line.                                   |
| `force_explicit_abi`           | `true`       | Forces explicit ABI on all extern declarations.                            |
| `wrap_comments`                | `false`      | Enables automatic wrapping of comments to fit within `max_width`.          |
| `reorder_imports`              | `true`       | Reorders imports alphabetically.                                           |
| `merge_derives`                | `true`       | Merges multiple `#[derive(...)]` attributes into a single line.            |
| `group_imports`                | `None`       | Groups imports (`None`, `StdExternalCrate`, `Crate`).                      |
| `format_code_in_doc_comments`  | `false`      | Formats Rust code blocks inside documentation comments.                    |

---

### **Command-Line Options**

| Command-Line Option            | Description                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| `--check`                      | Checks if the code is formatted but doesn't modify it.                     |
| `--emit`                       | Specifies output (`files`, `stdout`, `coverage`).                          |
| `--edition`                    | Formats code for a specific Rust edition (`2015`, `2018`, `2021`).         |
| `--config-path <path>`         | Specifies the path to a `rustfmt.toml` file.                               |
| `--unstable-features`          | Enables experimental options (requires nightly).                           |
| `--quiet`                      | Suppresses output.                                                         |
| `--skip-children`              | Skips formatting for child modules.                                        |
| `--write-mode <mode>`          | Legacy mode for writing (`overwrite`, `check`).                            |
| `--color <when>`               | Controls colored output (`always`, `auto`, `never`).                       |

#### Example:
To check formatting without modifying files:
```bash
rustfmt --check file.rs
```

---

### **Common Customization Scenarios**

1. **Set Maximum Line Width**:
   Add the following to `rustfmt.toml`:
   ```toml
   max_width = 80
   ```

2. **Use Single-Line Function Signatures**:
   ```toml
   fn_single_line = true
   ```

3. **Reorder Imports**:
   ```toml
   reorder_imports = true
   ```

4. **Wrap Comments**:
   ```toml
   wrap_comments = true
   ```

---

### **Using with Cargo**

To format all files in a Cargo project, run:
```bash
cargo fmt
```

To check if files are correctly formatted:
```bash
cargo fmt -- --check
```

---

### **Advanced Usage**
For more advanced configurations, use `--unstable-features` (requires nightly Rust):
```bash
rustfmt --unstable-features --config new_feature=true file.rs
```

---

### **Tips**
- Run `rustfmt --print-config current` to view the active configuration.
- Use `cargo fmt --all` to format all files in a workspace.

By using `rustfmt`, you can enforce consistent code style across teams and projects, saving time and reducing formatting-related discussions.